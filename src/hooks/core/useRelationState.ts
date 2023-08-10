/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:50:57
 * @FilePath: \react-evefyou-hooks\src\hooks\core\useRelationState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { SetStateAction, useCallback, useRef } from "react";
import { is } from "ramda";
import { useUnmountEffect } from "./useUnmountEffect";
import { deepCompareObj } from "../../utils/object";
import { SetMethods } from "../../types/state";


export type RelationHookMap<S> = {
  [key in keyof S]: [S[key], React.Dispatch<SetStateAction<S[key]>> | SetMethods<S[key]>];
};
export type RelationStateMethods<S extends object, RHM extends RelationHookMap<S>> = SetMethods<S> & {
  [key in keyof S]: RHM[key] extends [S[key], infer M]
  ? M extends React.Dispatch<SetStateAction<S[key]>>
  ? SetMethods<S[key]>
  : M extends SetMethods<S[key]> ? M
  : unknown
  : unknown;
};
export type UseRelationStateReturnType<S extends object, RHM extends RelationHookMap<S>> = [S, RelationStateMethods<S, RHM>]

export function useRelationState<
  RHM extends RelationHookMap<any>,
  S extends object = RHM extends RelationHookMap<infer SO> ? SO : object
>(
  hookMap: RHM
): UseRelationStateReturnType<S, RHM> {
  const currentStateRef = useRef<S | null>(null)
  const relationMethods = {} as RelationStateMethods<S, RHM>
  const relationState = Object.keys(hookMap).reduce((acc, key) => {
    const k = key as keyof S
    const [s, st] = hookMap[k] as [S[keyof S], React.Dispatch<SetStateAction<S[keyof S]>> | SetMethods<S[keyof S]>]
    acc[k] = s
    const methods = is(Function, st) ? { set: st } : st
    relationMethods[k] = methods as RelationStateMethods<S, RHM>[keyof S]
    return acc
  }, {} as S)
  if (!deepCompareObj(currentStateRef.current, relationState)) {
    currentStateRef.current = relationState
  }
  useUnmountEffect(() => { currentStateRef.current = null })

  const set = useCallback((newState: React.SetStateAction<S>) => {
    if (is(Function, newState)) {
      const currentState = currentStateRef.current
      if (currentState) {
        const nState = newState(currentState);
        Object.keys(hookMap).forEach(key => {
          const k = key as keyof S
          const [, st] = hookMap[k] as [S[keyof S], React.Dispatch<SetStateAction<S[keyof S]>> | SetMethods<S[keyof S]>]
          is(Object, st)
            ? (st as SetMethods<S[keyof S]>).set(nState[k])
            : (st as React.Dispatch<SetStateAction<S[keyof S]>>)(nState[k])
        })
      }
    } else {
      Object.keys(hookMap).forEach(key => {
        const k = key as keyof S
        const [, st] = hookMap[k] as [S[keyof S], React.Dispatch<SetStateAction<S[keyof S]>> | SetMethods<S[keyof S]>]
        is(Object, st)
          ? (st as SetMethods<S[keyof S]>).set(newState[k])
          : (st as React.Dispatch<SetStateAction<S[keyof S]>>)(newState[k])
      })
    }
  }, []);
  relationMethods.set = set
  return [relationState, relationMethods]
}

export default useRelationState;