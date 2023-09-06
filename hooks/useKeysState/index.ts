/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:55:15
 * @FilePath: \react-evefyou-hooks\src\hooks\state\items\useKeysState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import React from "react";
import { defineItemsState } from "../useItemsState";

export const defineKeysState = <K = React.Key, N extends string = 'keysState'>(
  initialState: K[] = [] as K[],
  name: N = 'keysState' as N,
) => defineItemsState<K, N>(initialState, name)

export const useKeysState = defineKeysState<React.Key>()