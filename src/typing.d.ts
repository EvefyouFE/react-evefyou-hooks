declare module 'react-evefyou-hooks' {
  import React from "react"
  import { GetRecoilValue, RecoilState } from "recoil"

  export type Recordable<T = any> = Record<string, T>;
  export type Nullable<T> = T | null;
  export type TreeList<
    T,
    IDN extends string = 'id',
    PIDN extends string = 'pId',
    ID extends string | number = number
  > = { [Key in IDN | PIDN]: ID; } & T;
  export type TreeNode<T> = { children?: TreeNode<T>[]; } & T;
  export type PropName<V = any, N extends string = string> = {
    [K in N]: V;
  }
  export type UnwrapNullable<T> = T extends Nullable<infer O> ? O : T;
  export type IsStringLiteralUnion<T> = string extends T ? false : true;
  export type IsObject<T> = T extends object ? true : false;
  export type IsNullable<T> = T extends Nullable<any> ? true : false;
  export type IsArray<T> = T extends Array<any> ? true : false;
  export type IsAny<T> = 0 extends 1 & T ? true : false;
  export type FirstElement<T extends readonly any[]> = T extends readonly [infer First, ...any[]] ? First : never;
  export type SecondElement<T extends readonly any[]> = T extends readonly [any, infer Second, ...any[]] ? Second : never;
  export type ThirdElement<T extends readonly any[]> = T extends readonly [any, any, infer Third, ...any[]] ? Third : never;
  export type FourthElement<T extends readonly any[]> = T extends readonly [any, any, any, infer Fourth, ...any[]] ? Fourth : never;
  export type FifthElement<T extends readonly any[]> = T extends readonly [any, any, any, any, infer Fifth, ...any[]] ? Fifth : never;
  export type LastElement<T extends readonly any[]> = T extends readonly [...any[], infer Last] ? Last : never;
  export type Tail<T extends readonly any[]> = T extends readonly [any, ...infer Rest] ? Rest : never;
  export type IsEmptyArray<T extends readonly any[]> = T extends readonly [] ? true : false;
  export type IsKeyof<P, O> = P extends keyof O ? true : false;
  export type ExtractNestedKeys<T, Excludes = 'children', UWT = UnwrapNullable<T>> =
    IsAny<UWT> extends true ? never :
    IsArray<UWT> extends true ? never :
    UWT extends {
      [key: string]: string | number | object | undefined;
    } ? never :
    UWT extends object
    ? {
      [K in keyof UWT]: K extends Excludes ? K :
      K | ExtractNestedKeys<UWT[K], Excludes>;
    }[keyof UWT]
    : never
  /**
   * 字符串常量联合类型会被 |string 变为string类型，不支持any类型
   */
  export type ExtractNestedValues<T, Excludes = 'children', UWT = UnwrapNullable<T>> =
    IsAny<UWT> extends true ? never :
    IsArray<UWT> extends true ? never :
    UWT extends {
      [key: string]: string | number | object | undefined;
    } ? never :
    UWT extends object
    ? {
      [K in keyof UWT]:
      K extends Excludes ? never :
      IsAny<UWT[K]> extends true ? never :
      UWT[K] | ExtractNestedValues<UWT[K], Excludes>;
    }[keyof UWT]
    : never

  export type NestedPropType<KS extends readonly any[], O> =
    IsObject<O> extends true ?
    FirstElement<KS> extends keyof O ?
    IsEmptyArray<Tail<KS>> extends true ? O[FirstElement<KS>]
    : O[FirstElement<KS>] extends Nullable<infer NO> ? NestedPropType<Tail<KS>, NO>
    : NestedPropType<Tail<KS>, O[FirstElement<KS>]>
    : never
    : O;

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
}