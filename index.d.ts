import { GetRecoilValue } from 'recoil';
import * as React_2 from 'react';
import { default as React_3 } from 'react';
import { RecoilState } from 'recoil';
import { RecoilValueReadOnly } from 'recoil';
import { SetStateAction } from 'react';

declare interface ActionFn<Args extends Array<any> = any, R = any> {
    (...args: Args): R;
}

declare type ActionMethods<A extends Actions> = {
    [P in keyof A]: A extends Record<P, ActionFn<infer Args, infer R>> ? ActionFn<Args, R> : unknown;
};

declare type Actions = Recordable<ActionFn>;

export declare interface ActiveItem<T extends KeyItem<K> = any, K = T extends KeyItem<infer Key> ? Key : React_3.Key> {
    itemsState: T[];
    activeKeyState?: K;
}

export declare interface BaseInstance<P> {
    init: (props: P) => void;
    initDebug?: (props: P, name?: string) => void;
}

declare interface BaseSelectorStateConfig<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters> {
    name: N;
    state: S;
    getters?: G & ThisType<PropName<S, N> & GetterMethods<S, G> & Pick<SelectorDefaultMethods<S, N>, 'getState'>>;
    setters?: SE & ThisType<(S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>) & GetterMethods<S, G> & SetterMethods<SE>>;
}

declare interface CallbackState<S, CBM extends SetMethods<S>> {
    (initialState?: S): [S, CBM];
}

export declare function deepCompareObj(prevProps: any, nextProps: any): boolean;

export declare function deepMergeObjectByKeys(keys: readonly any[], value: any, obj: Recordable): {
    [x: string]: any;
};

export declare function deepSetObjectByKeys(keys: readonly any[], value: any, obj: Recordable): Recordable;

declare type DefaultMethods<S = any, N extends string = 'state'> = DefaultSetMethods<S> & {
    get: () => S;
} & PropName<S, N>;

declare type DefaultSetMethods<S = any> = SetMethods<S> & {
    setProps: (prop: Partial<S>) => void;
    reset: () => void;
    deepSet: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: NestedPropType<KS, S>) => void;
    deepMerge: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: Partial<NestedPropType<KS, S>>) => void;
};

export declare const defineActiveItemsState: <T extends KeyItem<K>, K = T extends KeyItem<infer P> ? P : React_3.Key, N extends string = string>(name?: N) => UseState<{
    itemsState: T[];
    activeKeyState: K | undefined;
}, N, {
    getActiveItem(state: ActiveItem<T, K>): T[];
    getActiveKey(state: ActiveItem<T, K>): K | undefined;
}, {
    active(key: K): void;
    addAndActive(item: T): void;
    addOrUpdateAndActive(item: T): void;
    clear(): void;
}, {
    removeByKey(key: K): void;
    removeLeft(key: K): void;
    removeRight(key: K): void;
    removeOther(key: K): void;
}, RelationStateMethods<{
    itemsState: T[];
    activeKeyState: K | undefined;
}, {
    itemsState: UseStateReturnType<T[], "state", {
        getByKey(state: T[], k: K): T;
        getByKeys(state: T[], k: K): T[];
    }, {
        addByKey(item: T): void;
        updateByKey(newItem: T): void;
        addOrUpdateByKey(item: T): void;
        removeByKey(k: K): void;
        removeByKeys(keys: K[]): void;
    }, Actions, SetMethods<any>>;
    activeKeyState: [K | undefined, React_3.Dispatch<React_3.SetStateAction<K | undefined>>];
}>>;

export declare const defineItemsState: <T = any, N extends string = "itemsState">(initialState?: T[], name?: N) => UseState<T[], N, Getters<T[]>, Setters, Actions, SetMethods<any>>;

export declare const defineKeyItemsState: <T extends KeyItem<K>, K = T extends KeyItem<infer P> ? P : React_3.Key, N extends string = "state">(initialState?: T[], name?: N) => UseState<T[], N, {
    getByKey(state: T[], k: K): T;
    getByKeys(state: T[], k: K): T[];
}, {
    addByKey(item: T): void;
    updateByKey(newItem: T): void;
    addOrUpdateByKey(item: T): void;
    removeByKey(k: K): void;
    removeByKeys(keys: K[]): void;
}, Actions, SetMethods<any>>;

export declare const defineKeysState: <K = React_3.Key, N extends string = "keysState">(initialState?: K[], name?: N) => UseState<K[], N, Getters<K[]>, Setters, Actions, SetMethods<any>>;

export declare function defineRecoilSelector<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters>(config: RecoilValueConfig<S, N, G, SE>, atm?: RecoilState<S>): RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>;

export declare function defineRecoilState<S, RS extends CallbackState<RecoilState<S>, any> | RecoilState<S>, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = RS extends CallbackState<any, infer M> ? M : SetMethods<any>>(config: RecoilStateConfig<S, RS, N, G, SE, A, CBM>): UseState<S, N, G, SE, A, CBM>;

export declare function defineRecoilValue<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CB extends RecoilCallback = RecoilCallback>(config: RecoilValueConfig<S, N, G, SE, A, CB>, atm?: RecoilState<S>): UseRecoilValue<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object>;

export declare function defineRecoilValueAndSelector<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CB extends RecoilCallback = RecoilCallback>(config: RecoilValueConfig<S, N, G, SE, A, CB>, atm?: RecoilState<S>, sel?: RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>): [
UseRecoilValue<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object>,
RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>
];

export declare const defineSelectItemsState: <T extends KeyItem<K>, K = T extends KeyItem<infer P> ? P : React_3.Key, N extends string = string>(name?: N) => UseState<{
    itemsState: T[];
    selectKeysState: K[];
}, N, {
    getSelectedItems(state: SelectItem<T, K>): T[];
}, {
    select(keys: K[]): void;
    reSelect(keys: K[]): void;
    addAndSelect(item: T): void;
    addOrUpdateAndSelect(item: T): void;
    clear(): void;
}, {
    removeByKey(key: K): void;
}, RelationStateMethods<{
    itemsState: T[];
    selectKeysState: K[];
}, {
    itemsState: UseStateReturnType<T[], "state", {
        getByKey(state: T[], k: K): T;
        getByKeys(state: T[], k: K): T[];
    }, {
        addByKey(item: T): void;
        updateByKey(newItem: T): void;
        addOrUpdateByKey(item: T): void;
        removeByKey(k: K): void;
        removeByKeys(keys: K[]): void;
    }, Actions, SetMethods<any>>;
    selectKeysState: UseStateReturnType<K[], "keysState", Getters<K[]>, Setters, Actions, SetMethods<any>>;
}>>;

export declare function defineUseState<S extends CallbackState<any, any> | any, N extends string = 'state', G extends Getters<any> = Getters<S extends CallbackState<infer St, any> ? St : S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>>(config: StateConfig<S, N, G, SE, A, CBM>): UseState<S extends CallbackState<infer St, any> ? St : S, N, G, SE, A, CBM>;

declare type ExtractNestedKeys<T, Excludes = 'children', UWT = UnwrapNullable<T>> = IsAny<UWT> extends true ? never : IsArray<UWT> extends true ? never : UWT extends {
    [key: string]: string | number | object | undefined;
} ? never : UWT extends object ? {
    [K in keyof UWT]: K extends Excludes ? K : K | ExtractNestedKeys<UWT[K], Excludes>;
}[keyof UWT] : never;

declare type FirstElement<T extends readonly any[]> = T extends readonly [infer First, ...any[]] ? First : never;

declare interface GetterFn<S = any, Args extends Array<any> = any, R = any> {
    (...args: [S, ...Args]): R;
}

declare type GetterMethods<S = any, G extends Getters<S> = Getters<S>> = {
    [P in keyof G]: G extends Record<P, GetterFn<S, infer Args, infer R>> ? (...args: Args) => R : unknown;
};

declare type Getters<S = any> = Recordable<GetterFn<S>>;

declare type IsAny<T> = 0 extends 1 & T ? true : false;

declare type IsArray<T> = T extends Array<any> ? true : false;

declare type IsEmptyArray<T extends readonly any[]> = T extends readonly [] ? true : false;

declare type IsObject<T> = T extends object ? true : false;

declare type ItemsDefaultMethods<T = any, N extends string = 'state'> = DefaultMethods<T[], N> & ItemsDefaultSetMethods<T>;

declare type ItemsDefaultSetMethods<T = any> = {
    add: (newItem: T) => void;
    remove: (item: T) => void;
    removes: (items: T[]) => void;
    clear: () => void;
};

export declare interface KeyItem<K = React_3.Key> extends Recordable {
    key: K;
}

declare type NestedPropType<KS extends readonly any[], O> = IsObject<O> extends true ? FirstElement<KS> extends keyof O ? IsEmptyArray<Tail<KS>> extends true ? O[FirstElement<KS>] : O[FirstElement<KS>] extends Nullable<infer NO> ? NestedPropType<Tail<KS>, NO> : NestedPropType<Tail<KS>, O[FirstElement<KS>]> : never : O;

declare type Nullable<T> = T | null;

declare type PropName<V = any, N extends string = string> = {
    [K in N]: V;
};

declare interface RecoilCallback<CBM = object> {
    (): CBM;
}

declare interface RecoilStateConfig<S, RS extends CallbackState<RecoilState<S>, any> | RecoilState<S>, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = RS extends CallbackState<any, infer M> ? M : SetMethods<any>> {
    name: N;
    defaultValue: S;
    useState: RS;
    getters?: G & ThisType<PropName<S extends CallbackState<infer St, any> ? St : S, N> & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>>;
    setters?: SE & ThisType<(S extends Array<infer T> ? ItemsDefaultSetMethods<T> & DefaultSetMethods<T[]> : DefaultSetMethods<S extends CallbackState<infer St, any> ? St : S>) & SetterMethods<SE> & CBM>;
    actions?: A & ThisType<(S extends Array<infer T> ? ItemsDefaultMethods<T, N> : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>) & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G> & SetterMethods<SE> & ActionMethods<A> & CBM>;
}

declare type RecoilValueAsyncMethods<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends Recordable<any> = object> = RecoilValueMethods<S, N, G, SE, CBM> & ActionMethods<A>;

declare interface RecoilValueConfig<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CB extends RecoilCallback = RecoilCallback> extends BaseSelectorStateConfig<S, N, G, SE> {
    useFn?: CB;
    actions?: A & ThisType<(S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>) & GetterMethods<S, G> & SetterMethods<SE> & ActionMethods<A> & (CB extends RecoilCallback<infer CBM> ? CBM : object)>;
}

declare type RecoilValueMethods<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, CBM extends Recordable<any> = object> = GetterMethods<S, G> & SetterMethods<SE> & (S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>) & CBM;

declare type Recordable<T = any> = Record<string, T>;

export declare type RelationHookMap<S> = {
    [key in keyof S]: [S[key], React.Dispatch<SetStateAction<S[key]>> | SetMethods<S[key]>];
};

export declare type RelationStateMethods<S extends object, RHM extends RelationHookMap<S>> = SetMethods<S> & {
    [key in keyof S]: RHM[key] extends [S[key], infer M] ? M extends React.Dispatch<SetStateAction<S[key]>> ? SetMethods<S[key]> : M extends SetMethods<S[key]> ? M : unknown : unknown;
};

export declare interface SelectItem<T extends KeyItem<K> = any, K = T extends KeyItem<infer Key> ? Key : React_3.Key> {
    itemsState: T[];
    selectKeysState: K[];
}

declare type SelectorDefaultMethods<S = any, N extends string = 'state'> = {
    refresh: () => void;
    get: () => S;
    set: (state: S | ((state: S) => S)) => void;
    setProps: (prop: Partial<S>) => void;
    deepSet: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: NestedPropType<KS, S>) => void;
    deepMerge: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: Partial<NestedPropType<KS, S>>) => void;
    reset: () => void;
    getState: GetRecoilValue;
} & PropName<S, N>;

declare type SelectorItemsDefaultMethods<S extends any[] = any[], N extends string = 'state'> = SelectorDefaultMethods<S, N> & {
    add: (newItem: S extends Array<infer P> ? P : unknown) => void;
    remove: (item: S extends Array<infer P> ? P : unknown) => void;
    removes: (items: (S extends Array<infer P> ? P : unknown)[]) => void;
    clear: () => void;
};

declare interface SetMethods<S> {
    set: React.Dispatch<React.SetStateAction<S>>;
}

declare interface SetterFn<Args extends Array<any> = any, R = any> {
    (...args: Args): R;
}

declare type SetterMethods<S extends Setters> = {
    [P in keyof S]: S extends Record<P, SetterFn<infer Args, infer R>> ? SetterFn<Args, R> : unknown;
};

declare type Setters = Recordable<SetterFn>;

declare interface StateConfig<S extends CallbackState<any, any> | any, N extends string = 'state', G extends Getters<any> = Getters<S extends CallbackState<infer St, any> ? St : S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> {
    name: N;
    useState: S;
    getters?: G & ThisType<PropName<S extends CallbackState<infer St, any> ? St : S, N> & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>>;
    setters?: SE & ThisType<(S extends Array<infer T> ? ItemsDefaultSetMethods<T> & DefaultSetMethods<T[]> : DefaultSetMethods<S extends CallbackState<infer St, any> ? St : S>) & SetterMethods<SE> & CBM>;
    actions?: A & ThisType<(S extends Array<infer T> ? ItemsDefaultMethods<T, N> : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>) & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G> & SetterMethods<SE> & ActionMethods<A> & CBM>;
}

declare type StateMethods<S extends CallbackState<any, any> | any = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> = GetterMethods<S, G> & SetterMethods<SE> & ActionMethods<A> & (S extends Array<infer T> ? ItemsDefaultMethods<T, N> : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>) & CBM;

declare type Tail<T extends readonly any[]> = T extends readonly [any, ...infer Rest] ? Rest : never;

declare type UnwrapNullable<T> = T extends Nullable<infer O> ? O : T;

export declare const useActiveItemsState: UseState<{
    itemsState: KeyItem<React_3.Key>[];
    activeKeyState: React_3.Key | undefined;
}, string, {
    getActiveItem(state: ActiveItem<KeyItem<React_3.Key>, React_3.Key>): KeyItem<React_3.Key>[];
    getActiveKey(state: ActiveItem<KeyItem<React_3.Key>, React_3.Key>): React_3.Key | undefined;
}, {
    active(key: React_3.Key): void;
    addAndActive(item: KeyItem<React_3.Key>): void;
    addOrUpdateAndActive(item: KeyItem<React_3.Key>): void;
    clear(): void;
}, {
    removeByKey(key: React_3.Key): void;
    removeLeft(key: React_3.Key): void;
    removeRight(key: React_3.Key): void;
    removeOther(key: React_3.Key): void;
}, RelationStateMethods<{
    itemsState: KeyItem<React_3.Key>[];
    activeKeyState: React_3.Key | undefined;
}, {
    itemsState: UseStateReturnType<KeyItem<React_3.Key>[], "state", {
        getByKey(state: KeyItem<React_3.Key>[], k: React_3.Key): KeyItem<React_3.Key>;
        getByKeys(state: KeyItem<React_3.Key>[], k: React_3.Key): KeyItem<React_3.Key>[];
    }, {
        addByKey(item: KeyItem<React_3.Key>): void;
        updateByKey(newItem: KeyItem<React_3.Key>): void;
        addOrUpdateByKey(item: KeyItem<React_3.Key>): void;
        removeByKey(k: React_3.Key): void;
        removeByKeys(keys: React_3.Key[]): void;
    }, Actions, SetMethods<any>>;
    activeKeyState: [React_3.Key | undefined, React_3.Dispatch<React_3.SetStateAction<React_3.Key | undefined>>];
}>>;

export declare function useCompInstance<T extends BaseInstance<P>, P = T extends BaseInstance<infer Props> ? Props : unknown>(props?: P, name?: string): UseCompInstanceReturnType<P, T>;

export declare type UseCompInstanceReturnType<P, T extends BaseInstance<P>> = [React.MutableRefObject<T | null>, Partial<T>];

export declare const useItemsState: UseState<any[], "itemsState", Getters<any[]>, Setters, Actions, SetMethods<any>>;

export declare const useKeyItemsState: UseState<KeyItem<React_3.Key>[], "state", {
    getByKey(state: KeyItem<React_3.Key>[], k: React_3.Key): KeyItem<React_3.Key>;
    getByKeys(state: KeyItem<React_3.Key>[], k: React_3.Key): KeyItem<React_3.Key>[];
}, {
    addByKey(item: KeyItem<React_3.Key>): void;
    updateByKey(newItem: KeyItem<React_3.Key>): void;
    addOrUpdateByKey(item: KeyItem<React_3.Key>): void;
    removeByKey(k: React_3.Key): void;
    removeByKeys(keys: React_3.Key[]): void;
}, Actions, SetMethods<any>>;

export declare const useKeysState: UseState<React_3.Key[], "keysState", Getters<React_3.Key[]>, Setters, Actions, SetMethods<any>>;

export declare const useMountEffect: (fn: React_2.EffectCallback) => void;

export declare function useProps<T>(props: T): UsePropsReturnType<T>;

export declare type UsePropsMethods<T> = UsePropsSetMethods<T>;

export declare type UsePropsReturnType<T> = [T, UsePropsMethods<T>];

export declare interface UsePropsSetMethods<T> {
    init: (props: T) => void;
    initDebug: (props: T, name?: string) => void;
    setProps: (props: T) => void;
    setPropsState: React.Dispatch<React.SetStateAction<T>>;
    resetProps: (props: T) => void;
}

export declare function usePropsState<T>(props: T): UsePropsStateReturnType<T>;

export declare type UsePropsStateReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

declare interface UseRecoilValue<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends Recordable<any> = object> {
    (initialState?: S): UseRecoilValueReturnType<S, N, G, SE, A, CBM>;
}

declare type UseRecoilValueReturnType<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends Recordable<any> = object> = [S, RecoilValueAsyncMethods<S, N, G, SE, A, CBM>];

export declare function useRelationState<RHM extends RelationHookMap<any>, S extends object = RHM extends RelationHookMap<infer SO> ? SO : object>(hookMap: RHM): UseRelationStateReturnType<S, RHM>;

export declare type UseRelationStateReturnType<S extends object, RHM extends RelationHookMap<S>> = [S, RelationStateMethods<S, RHM>];

export declare const useSelectItemsState: UseState<{
    itemsState: KeyItem<React_3.Key>[];
    selectKeysState: React_3.Key[];
}, string, {
    getSelectedItems(state: SelectItem<KeyItem<React_3.Key>, React_3.Key>): KeyItem<React_3.Key>[];
}, {
    select(keys: React_3.Key[]): void;
    reSelect(keys: React_3.Key[]): void;
    addAndSelect(item: KeyItem<React_3.Key>): void;
    addOrUpdateAndSelect(item: KeyItem<React_3.Key>): void;
    clear(): void;
}, {
    removeByKey(key: React_3.Key): void;
}, RelationStateMethods<{
    itemsState: KeyItem<React_3.Key>[];
    selectKeysState: React_3.Key[];
}, {
    itemsState: UseStateReturnType<KeyItem<React_3.Key>[], "state", {
        getByKey(state: KeyItem<React_3.Key>[], k: React_3.Key): KeyItem<React_3.Key>;
        getByKeys(state: KeyItem<React_3.Key>[], k: React_3.Key): KeyItem<React_3.Key>[];
    }, {
        addByKey(item: KeyItem<React_3.Key>): void;
        updateByKey(newItem: KeyItem<React_3.Key>): void;
        addOrUpdateByKey(item: KeyItem<React_3.Key>): void;
        removeByKey(k: React_3.Key): void;
        removeByKeys(keys: React_3.Key[]): void;
    }, Actions, SetMethods<any>>;
    selectKeysState: UseStateReturnType<React_3.Key[], "keysState", Getters<React_3.Key[]>, Setters, Actions, SetMethods<any>>;
}>>;

declare interface UseState<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> {
    (initialState?: S): UseStateReturnType<S, N, G, SE, A, CBM>;
}

declare type UseStateReturnType<S = any, N extends string = 'state', G extends Getters<any> = any, SE extends Setters = any, A extends Actions = any, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> = [S, StateMethods<S, N, G, SE, A, CBM>];

export declare const useUnmountEffect: (fn: () => void) => void;

export { }
