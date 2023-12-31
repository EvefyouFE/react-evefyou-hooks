/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:55:15
 * @FilePath: \react-evefyou-hooks\src\hooks\state\items\useActiveItemsState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import React, { useState } from "react";
import { defineKeyItemsState } from "../useKeyItemsState";
import { useRelationState } from "../useRelationState";
import { defineUseState } from "../defineUseState";
import { ActiveItem, KeyItem } from "@/types/hooks";

export const defineActiveItemsState = <
  T extends KeyItem<K>,
  K = T extends KeyItem<infer P> ? P : React.Key,
  N extends string = string,
>(
  name: N = 'activeItemsState' as N
) => {
  const useKeyItemsState = defineKeyItemsState<T, K>()
  return defineUseState({
    name,
    useState: (initialSt?: ActiveItem<T, K>) => useRelationState({
      itemsState: useKeyItemsState(initialSt?.itemsState),
      activeKeyState: useState(initialSt?.activeKeyState)
    }),
    getters: {
      getActiveItem(state: ActiveItem<T, K>) {
        return state.itemsState.filter(ims => ims.key === state.activeKeyState)
      },
      getActiveKey(state: ActiveItem<T, K>) {
        return state.activeKeyState
      },
    },
    setters: {
      active(key: K) {
        this.activeKeyState.set(key)
      },
      addAndActive(item: T) {
        this.itemsState.addByKey(item)
        this.active(item.key)
      },
      addOrUpdateAndActive(item: T) {
        this.itemsState.addOrUpdateByKey(item)
        this.active(item.key)
      },
      clear() {
        this.itemsState.clear();
        this.activeKeyState.set(undefined)
      }
    },
    actions: {
      removeByKey(key: K) {
        if (this[name].activeKeyState === key && this[name].itemsState.length > 1) {
          this[name].itemsState.some(({ key: k }, idx) => {
            if (k === key) {
              const newActiveItem = idx === 0
                ? this[name].itemsState[idx + 1]
                : this[name].itemsState[idx - 1]
              this.activeKeyState.set(newActiveItem.key)
              return true;
            }
            return false;
          })
        }
        this.itemsState.removeByKey(key)
      },
      removeLeft(key: K) {
        const idx = this[name].itemsState.findIndex(item => item.key === key)
        idx > 0 && this.itemsState.set(ims => ims.slice(idx))
      },
      removeRight(key: K) {
        const idx = this[name].itemsState.findIndex(item => item.key === key)
        idx > 0 && this.itemsState.set(ims => ims.slice(0, idx + 1))
      },
      removeOther(key: K) {
        const item = this[name].itemsState.find(im => im.key === key)
        if (this[name].itemsState.length !== 1 && item) {
          this.itemsState.set([item])
        }
      }
    }
  })
}


export const useActiveItemsState = defineActiveItemsState<KeyItem>()