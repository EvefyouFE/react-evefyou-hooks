/*
 * @Author: EvefyouFE/evef
 * @Date: 2023-08-27 00:37:56
 * @FilePath: \react-evefyou-hooks\src\state\base.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { curry, includes, is, omit } from "ramda"
import { ActionFn, ActionMethods, Actions, CallbackState, DefaultMethods, DefaultSetMethods, GetterFn, GetterMethods, Getters, ItemsDefaultMethods, SelectorDefaultMethods, SetMethods, SetterFn, SetterMethods, Setters } from "../../types/state";
import { SetStateAction } from "react";
import { deepMergeObjectByKeys, deepSetObjectByKeys } from "react-evefyou-common";
import { Recordable } from "react-evefyou-common";
import { GetCallback, GetRecoilValue, RecoilState, SelectorCallbackInterface } from "recoil";

export function getterMethods<
  S,
  G extends Getters<S>,
>(getters: G, state: S, context: any) {
  return Object.keys(getters).reduce((acc, k: keyof G) => {
    const getter = getters[k]
    const curriedGetter = curry(getter.bind(context)) as GetterFn<S>
    const res = curriedGetter(state) as
      G extends Record<keyof G, GetterFn<S, infer Args, infer R>>
      ? (...args: Args) => R
      : unknown
    acc[k] = is(Function, res)
      ? res
      : (() => res) as G extends Record<keyof G, GetterFn<S, infer Args, infer R>>
      ? (...args: Args) => R
      : unknown
    return acc;
  }, {} as GetterMethods<S, G>)
}
export function setterMethods<
  SE extends Setters
>(actions: SE, context: any) {
  return Object.keys(actions).reduce((acc, k: keyof SE) => {
    const res = actions[k] as
      SE extends Record<keyof SE, SetterFn<infer Args, infer R>>
      ? SetterFn<Args, R>
      : unknown
    acc[k] = res.bind(context) as typeof res
    return acc;
  }, {} as SetterMethods<SE>)
}
export function actionMethods<
  A extends Actions
>(actions: A, context: any) {
  return Object.keys(actions).reduce((acc, k: keyof A) => {
    const res = actions[k] as
      A extends Record<keyof A, ActionFn<infer Args, infer R>>
      ? ActionFn<Args, R>
      : unknown
    acc[k] = res.bind(context) as typeof res
    return acc;
  }, {} as ActionMethods<A>)
}


export function getDefaultSetMethods<
  S,
>(
  set: React.Dispatch<SetStateAction<S>>,
  initialState?: S
) {
  let defaultMethods = {
    set: (s) => set(s),
    setProps: (props) => set((s: S) => ({ ...s, ...props })),
    reset: () => initialState && set(initialState),
    deepSet: (keys, value) => set(s => {
      const state = s
      if (!is(Object, state)) return state;
      const newState = deepSetObjectByKeys(keys, value, state as Recordable)
      return newState as S
    }),
    deepMerge: (keys, value) => set(s => {
      const state = s
      if (!is(Object, state)) return state;
      const newState = deepMergeObjectByKeys(keys, value, state as Recordable)
      return newState as S
    }),
  } as (DefaultSetMethods<S>)
  if (is(Array, initialState)) {
    defaultMethods = Object.assign(defaultMethods, {
      add: (newItem) => {
        set(s => {
          const state = s as S extends Array<infer T> ? T[] : any[]
          state.push(newItem);
          return [...state] as S
        })
      },
      remove: (item) => {
        set(s => {
          const state = s as S extends Array<infer T> ? T[] : any[]
          const newPanes = state.filter((i) => i !== item);
          return newPanes as S
        });
      },
      removes: (items) => {
        set(s => {
          const state = s as S extends Array<infer T> ? T[] : any[]
          const leftItems = state.filter((item) => !includes(item, items))
          return leftItems as S
        })
      },
      clear: () => {
        set([] as S)
      }
    } as ItemsDefaultMethods<S extends (infer T)[] ? T : any>
    )
  }
  return defaultMethods as S extends (infer T)[] ? ItemsDefaultMethods<T> : DefaultSetMethods<S>
}

export function getDefaultMethods<
  S,
  N extends string = 'state',
  CBM extends SetMethods<S> = S extends CallbackState<S, infer M> ? M : SetMethods<S>
>(
  name: N,
  defineState: S,
  cbm: CBM,
) {
  return {
    get: () => defineState,
    ...omit(['set'], cbm),
    [name]: defineState,
  } as (DefaultMethods<S, N> & CBM)
}

export function getSelectorDefaultMethods<
  S,
  N extends string
>(key: N, atm: RecoilState<S>, defineState: S, { get, getCallback }: {
  get: GetRecoilValue,
  getCallback: GetCallback,
}): SelectorDefaultMethods<S, N> {
  const defaultMethods = {
    getState: get,
    get: () => defineState,
    [key]: defineState,
    set: getCallback(set),
    setProps: getCallback(setProps(defineState)),
    reset: getCallback(reset),
    refresh: getCallback(refresh),
    deepSet: (keys, value) => {
      if (!is(Object, defineState) || is(Array, defineState) || is(Function, defineState)) return;
      const newState = deepSetObjectByKeys(keys, value, defineState as Recordable)
      getCallback(set)(newState as S)
    },
    deepMerge: (keys, value) => {
      if (!is(Object, defineState) || is(Array, defineState) || is(Function, defineState)) return;
      const newState = deepMergeObjectByKeys(keys, value, defineState as Recordable)
      getCallback(set)(newState as S)
    }
  } as SelectorDefaultMethods<S, N>

  function set({ set: s }: SelectorCallbackInterface) {
    return (value: S | ((state: S) => S)) => s(atm, value)
  }
  function setProps(state: S) {
    return ({ set: s }: SelectorCallbackInterface) =>
      (props: Partial<S>) =>
        s(atm, { ...state, ...props })
  }
  function reset({ reset: rs }: SelectorCallbackInterface) {
    return () => rs(atm)
  }
  function refresh({ refresh: rf }: SelectorCallbackInterface) {
    return () => rf(atm)
  }

  return defaultMethods
}