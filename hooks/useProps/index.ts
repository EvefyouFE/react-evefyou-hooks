/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:50:57
 * @FilePath: \react-evefyou-hooks\src\hooks\core\useProps.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { useMemo } from "react";
import { usePropsState } from "../usePropsState";
import { UsePropsReturnType, UsePropsSetMethods } from "@/types/hooks";

export function useProps<T>(props: T): UsePropsReturnType<T> {
    const [propsState, setPropsState] = usePropsState<T>(props);

    const setMethods: UsePropsSetMethods<T> = useMemo(() => {
        function init(p: T) {
            setProps(p)
        }
        function initDebug(p: T, name?: string) {
            console.log(`initDebug...name:[${name ?? ''}]`, p)
            setProps(p)
        }
        function setProps(pr: T) {
            setPropsState(p => ({ ...p, ...pr }))
        }
        function resetProps(p: T) {
            setPropsState(p)
        }
        return {
            init,
            initDebug,
            setProps,
            resetProps,
            setPropsState,
        }
    }, [setPropsState])

    return [propsState, setMethods]
}