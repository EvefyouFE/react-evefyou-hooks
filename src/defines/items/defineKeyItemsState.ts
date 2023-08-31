/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:55:15
 * @FilePath: \react-evefyou-hooks\src\hooks\state\items\useKeyItemsState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import React from "react";
import { includes } from "ramda";
import { defineUseState } from "@/defines/defineUseState";
import { KeyItem } from "@/types/hooks";


export const defineKeyItemsState = <
    T extends KeyItem<K>,
    K = T extends KeyItem<infer P> ? P : React.Key,
    N extends string = 'state',
>(
    initialState: T[] = [] as T[],
    name: N = 'keyItemsState' as N,
) => defineUseState({
    name,
    useState: initialState,
    getters: {
        getByKey(state: T[], k: K) {
            return state.filter(item => item.key === k)[0]
        },
        getByKeys(state: T[], k: K) {
            return state.filter(item => includes(item.key, [k]))
        },
    },
    setters: {
        addByKey(item: T) {
            this.set(s => {
                const newItems = s.filter(({ key }: T) => key !== item.key)
                // 不存在数组里
                if (!newItems.length || newItems.length === s.length) {
                    return newItems.concat(item)
                }
                return s
            })
        },
        updateByKey(newItem: T) {
            this.set(s => s.map((item: T) => item.key === newItem.key ? newItem : item))
        },
        addOrUpdateByKey(item: T) {
            this.set(s => {
                const idx = s.findIndex(({ key }) => key === item.key)
                return idx !== -1 ? s.map((im, index) => index === idx ? item : im) : s.concat(item)
            })
        },
        removeByKey(k: K) {
            this.set(s => s.filter((item: T) => item.key !== k));
        },
        removeByKeys(keys: K[]) {
            this.set(s => s.filter((item: T) => !includes(item.key, keys)))
        },
    },
})
