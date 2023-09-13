/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:50:57
 * @FilePath: \react-evefyou-hooks\src\hooks\core\usePropsState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { UsePropsStateReturnType } from "@/types/hooks";
import { is } from "ramda";
import { useEffect, useState } from "react";


export function usePropsState<T>(props: T): UsePropsStateReturnType<T> {
    const [propsState, setPropsState] = useState<T>(props);
    useEffect(() => {
        props && setPropsState(p => !Object.is(props, p) ? is(Object, p) ? { ...p, ...props } : props : p)
    }, [props])

    return [propsState, setPropsState]
}