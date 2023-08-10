/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:55:15
 * @FilePath: \react-evefyou-hooks\src\hooks\state\items\useItemsState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { defineUseState } from "../../../state"

export const defineItemsState = <T = any, N extends string = 'itemsState'>(
    initialState: T[] = [] as T[],
    name: N = 'itemsState' as N
) => defineUseState({
    name,
    useState: initialState,
})

export const useItemsState = defineItemsState()