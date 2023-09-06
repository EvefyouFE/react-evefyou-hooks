/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 21:25:28
 * @FilePath: \react-evefyou-hooks\src\types\state.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */

import { GetRecoilValue, RecoilState } from "recoil";
import { ExtractNestedKeys, NestedPropType, PropName, Recordable } from "react-evefyou-common";

export interface GetterFn<S = any, Args extends Array<any> = any, R = any> {
  (...args: [S, ...Args]): R;
}
export interface SetterFn<Args extends Array<any> = any, R = any> {
  (...args: Args): R;
}
export interface ActionFn<Args extends Array<any> = any, R = any> {
  (...args: Args): R;
}
export type Getters<S = any> = Recordable<GetterFn<S>>;
export type Setters = Recordable<SetterFn>;
export type Actions = Recordable<ActionFn>;
export type GetterMethods<S = any, G extends Getters<S> = Getters<S>> = {
  [P in keyof G]: G extends Record<P, GetterFn<S, infer Args, infer R>> ? (...args: Args) => R : unknown;
};
export type SetterMethods<S extends Setters> = {
  [P in keyof S]: S extends Record<P, SetterFn<infer Args, infer R>> ? SetterFn<Args, R> : unknown;
};
export type ActionMethods<A extends Actions> = {
  [P in keyof A]: A extends Record<P, ActionFn<infer Args, infer R>> ? ActionFn<Args, R> : unknown;
};
export type DefaultSetMethods<S = any> = SetMethods<S> & {
  setProps: (prop: Partial<S>) => void;
  reset: () => void;
  deepSet: <KS extends readonly ExtractNestedKeys<S>[]>(
    keys: KS,
    any: NestedPropType<KS, S>
  ) => void;
  deepMerge: <KS extends readonly ExtractNestedKeys<S>[]>(
    keys: KS,
    any: Partial<NestedPropType<KS, S>>
  ) => void;
}

export type ItemsDefaultSetMethods<
  T = any,
> = {
  add: (newItem: T) => void;
  remove: (item: T) => void;
  removes: (items: T[]) => void;
  clear: () => void;
};

export type DefaultMethods<S = any, N extends string = 'state'> = DefaultSetMethods<S> & {
  get: () => S;
} & PropName<S, N>;

export type ItemsDefaultMethods<
  T = any,
  N extends string = 'state'
> = DefaultMethods<T[], N> & ItemsDefaultSetMethods<T>;

export interface SetMethods<S> {
  set: React.Dispatch<React.SetStateAction<S>>;
}

export interface CallbackState<
  S,
  CBM extends SetMethods<S>
> {
  (initialState?: S): [S, CBM]
}

export interface StateConfig<
  S extends CallbackState<any, any> | any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S extends CallbackState<infer St, any> ? St : S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>
> {
  name: N;
  useState: S;
  getters?: G & ThisType<PropName<S extends CallbackState<infer St, any> ? St : S, N>
    & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>>;
  setters?: SE & ThisType<
    (S extends Array<infer T> ? ItemsDefaultSetMethods<T> & DefaultSetMethods<T[]>
      : DefaultSetMethods<S extends CallbackState<infer St, any> ? St : S>)
    & SetterMethods<SE> & CBM
  >;
  actions?: A & ThisType<
    (S extends Array<infer T> ? ItemsDefaultMethods<T, N>
      : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>)
    & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>
    & SetterMethods<SE> & ActionMethods<A> & CBM
  >;
}

export interface RecoilCallbackState<
  S,
  CBM extends SetMethods<S>
> {
  (): [RecoilState<S>, CBM]
}

export interface RecoilStateConfig<
  S,
  RS extends CallbackState<RecoilState<S>, any> | RecoilState<S>,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends SetMethods<any> = RS extends CallbackState<any, infer M> ? M : SetMethods<any>
> {
  name: N;
  defaultValue: S;
  useState: RS;
  getters?: G & ThisType<PropName<S extends CallbackState<infer St, any> ? St : S, N>
    & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>>;
  setters?: SE & ThisType<
    (S extends Array<infer T> ? ItemsDefaultSetMethods<T> & DefaultSetMethods<T[]>
      : DefaultSetMethods<S extends CallbackState<infer St, any> ? St : S>)
    & SetterMethods<SE> & CBM
  >;
  actions?: A & ThisType<
    (S extends Array<infer T> ? ItemsDefaultMethods<T, N>
      : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>)
    & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>
    & SetterMethods<SE> & ActionMethods<A> & CBM
  >;
}

export type StateMethods<
  S extends CallbackState<any, any> | any = any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>
> = GetterMethods<S, G>
  & SetterMethods<SE>
  & ActionMethods<A>
  & (S extends Array<infer T> ? ItemsDefaultMethods<T, N>
    : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>)
  & CBM
  ;

export type UseStateReturnType<
  S = any,
  N extends string = 'state',
  G extends Getters<any> = any,
  SE extends Setters = any,
  A extends Actions = any,
  CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>
> = [S, StateMethods<S, N, G, SE, A, CBM>]

export interface UseState<
  S = any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>
> {
  (initialState?: S): UseStateReturnType<S, N, G, SE, A, CBM>
}


export type SelectorDefaultMethods<S = any, N extends string = 'state'> = {
  refresh: () => void;
  get: () => S;
  set: (state: S | ((state: S) => S)) => void;
  setProps: (prop: Partial<S>) => void;
  deepSet: <KS extends readonly ExtractNestedKeys<S>[]>(
    keys: KS,
    any: NestedPropType<KS, S>
  ) => void;
  deepMerge: <KS extends readonly ExtractNestedKeys<S>[]>(
    keys: KS,
    any: Partial<NestedPropType<KS, S>>
  ) => void;
  reset: () => void;
  getState: GetRecoilValue;
} & PropName<S, N>;

export type SelectorItemsDefaultMethods<
  S extends any[] = any[],
  N extends string = 'state',
> = SelectorDefaultMethods<S, N> & {
  add: (newItem: S extends Array<infer P> ? P : unknown) => void;
  remove: (item: S extends Array<infer P> ? P : unknown) => void;
  removes: (items: (S extends Array<infer P> ? P : unknown)[]) => void;
  clear: () => void;
};

export interface BaseSelectorStateConfig<
  S,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
> {
  name: N;
  state: S;
  getters?: G & ThisType<
    PropName<S, N>
    & GetterMethods<S, G>
    & Pick<SelectorDefaultMethods<S, N>, 'getState'>
  >;
  setters?: SE & ThisType<
    (S extends any[] ? SelectorItemsDefaultMethods<S, N>
      : SelectorDefaultMethods<S, N>)
    & GetterMethods<S, G>
    & SetterMethods<SE>
  >;
}

export interface RecoilCallback<CBM = object> {
  (): CBM
}

export interface RecoilValueConfig<
  S,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CB extends RecoilCallback = RecoilCallback,
> extends BaseSelectorStateConfig<S, N, G, SE> {
  useFn?: CB,
  actions?: A & ThisType<
    (S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>)
    & GetterMethods<S, G>
    & SetterMethods<SE>
    & ActionMethods<A>
    & (CB extends RecoilCallback<infer CBM> ? CBM : object)
  >;
}

export type RecoilValueMethods<
  S = any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  CBM extends Recordable<any> = object
> = GetterMethods<S, G>
  & SetterMethods<SE>
  & (S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>)
  & CBM;

export type RecoilValueAsyncMethods<
  S = any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends Recordable<any> = object
> = RecoilValueMethods<S, N, G, SE, CBM>
  & ActionMethods<A>
  ;

export type UseRecoilValueReturnType<
  S = any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends Recordable<any> = object
> = [S, RecoilValueAsyncMethods<S, N, G, SE, A, CBM>]

export interface UseRecoilValue<
  S,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends Recordable<any> = object
> {
  (initialState?: S): UseRecoilValueReturnType<S, N, G, SE, A, CBM>
}