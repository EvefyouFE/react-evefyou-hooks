/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:55:15
 * @FilePath: \react-evefyou-hooks\src\hooks\state\items\useSelectItemsState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { KeyItem } from "@/types/hooks";
import { defineSelectItemsState } from "@/state";

export const useSelectItemsState = defineSelectItemsState<KeyItem>()