/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:55:15
 * @FilePath: \react-evefyou-hooks\src\hooks\state\items\useSelectItemsState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */

import { drop, includes } from "ramda";
import React from "react";
import { defineKeyItemsState } from "./defineKeyItemsState";
import { defineKeysState } from "./defineKeysState";
import { defineUseState } from "@/defines/defineUseState";
import useRelationState from "@/core/useRelationState";
import { KeyItem } from "@/types/hooks";

export interface SelectItem<T extends KeyItem<K> = any, K = T extends KeyItem<infer Key> ? Key : React.Key> {
    itemsState: T[];
    selectKeysState: K[];
}

export const defineSelectItemsState = <
    T extends KeyItem<K>,
    K = T extends KeyItem<infer P> ? P : React.Key,
    N extends string = string,
>(
    name: N = 'selectItemsState' as N
) => {
    const useKeyItemsState = defineKeyItemsState<T, K>()
    const useKeysState = defineKeysState<K>()
    return defineUseState({
        name,
        useState: (initialSt?: SelectItem<T, K>) => useRelationState({
            itemsState: useKeyItemsState(initialSt?.itemsState),
            selectKeysState: useKeysState(initialSt?.selectKeysState)
        }),
        getters: {
            getSelectedItems(state: SelectItem<T, K>) {
                return state.itemsState.filter(ims => includes(ims.key, state.selectKeysState))
            }
        },
        setters: {
            select(keys: K[]) {
                this.selectKeysState.set(ks => {
                    const newSelectKeys = keys.filter(k => !includes(k, ks))
                    if (newSelectKeys.length) {
                        return [...ks, ...newSelectKeys]
                    }
                    return ks
                })
            },
            reSelect(keys: K[]) {
                this.selectKeysState.set(keys)
            },
            addAndSelect(item: T) {
                this.itemsState.addByKey(item)
                this.select([item.key])
            },
            addOrUpdateAndSelect(item: T) {
                this.itemsState.addOrUpdateByKey(item)
                this.select([item.key])
            },
            clear() {
                this.itemsState.clear()
                this.selectKeysState.clear()
            },
        },
        actions: {
            removeByKey(key: K) {
                const idx = this[name].itemsState.findIndex(({ key: k }) => k === key)
                idx !== -1 && this.itemsState.set(ims => drop(idx, ims))
                const idxK = this[name].selectKeysState.findIndex(k => k === key)
                idxK !== -1 && this.selectKeysState.set(ks => drop(idxK, ks))
            },
        }
    })
}
