import { Dispatch } from 'react';
import { ExtractNestedKeys } from 'react-evefyou-common';
import { GetCallback } from 'recoil';
import { GetRecoilValue } from 'recoil';
import { Key } from 'react';
import { NestedPropType } from 'react-evefyou-common';
import { PropName } from 'react-evefyou-common';
import { default as React_2 } from 'react';
import * as React_3 from 'react';
import { RecoilState } from 'recoil';
import { RecoilValueReadOnly } from 'recoil';
import { Recordable } from 'react-evefyou-common';
import { SetStateAction } from 'react';
import { UnwrapNullable } from 'react-evefyou-common';

export declare interface ActionFn<Args extends Array<any> = any, R = any> {
    (...args: Args): R;
}

export declare type ActionMethods<A extends Actions> = {
    [P in keyof A]: A extends Record<P, ActionFn<infer Args, infer R>> ? ActionFn<Args, R> : unknown;
};

export declare function actionMethods<A extends Actions>(actions: A, context: any): ActionMethods<A>;

export declare type Actions = Recordable<ActionFn>;

export declare interface ActiveItem<T extends KeyItem<K> = any, K = T extends KeyItem<infer Key> ? Key : React.Key> {
    itemsState: T[];
    activeKeyState?: K;
}

export declare interface BaseInstance<P> {
    init: (props: P) => void;
    initDebug?: (props: P, name?: string) => void;
}

export declare interface BaseSelectorStateConfig<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters> {
    name: N;
    state: S;
    getters?: G & ThisType<PropName<S, N> & GetterMethods<S, G> & Pick<SelectorDefaultMethods<S, N>, 'getState'>>;
    setters?: SE & ThisType<(S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>) & GetterMethods<S, G> & SetterMethods<SE>>;
}

export declare interface CallbackState<S, CBM extends SetMethods<S>> {
    (initialState?: S): [S, CBM];
}

export declare type DefaultMethods<S = any, N extends string = 'state'> = DefaultSetMethods<S> & {
    get: () => S;
} & PropName<S, N>;

export declare type DefaultSetMethods<S = any> = SetMethods<S> & {
    setProps: (prop: Partial<S>) => void;
    reset: () => void;
    deepSet: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: NestedPropType<KS, S>) => void;
    deepMerge: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: Partial<NestedPropType<KS, S>>) => void;
};

export declare const defineActiveItemsState: <T extends KeyItem<K>, K = T extends KeyItem<infer P> ? P : React_2.Key, N extends string = string>(name?: N) => UseState<{
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
    activeKeyState: [K | undefined, React_2.Dispatch<React_2.SetStateAction<K | undefined>>];
}>>;

export declare const defineItemsState: <T = any, N extends string = "itemsState">(initialState?: T[], name?: N) => UseState<T[], N, Getters<T[]>, Setters, Actions, SetMethods<any>>;

export declare const defineKeyItemsState: <T extends KeyItem<K>, K = T extends KeyItem<infer P> ? P : React_2.Key, N extends string = "state">(initialState?: T[], name?: N) => UseState<T[], N, {
    getByKey(state: T[], k: K): T;
    getByKeys(state: T[], k: K): T[];
}, {
    addByKey(item: T): void;
    updateByKey(newItem: T): void;
    addOrUpdateByKey(item: T): void;
    removeByKey(k: K): void;
    removeByKeys(keys: K[]): void;
}, Actions, SetMethods<any>>;

export declare const defineKeysState: <K = React_2.Key, N extends string = "keysState">(initialState?: K[], name?: N) => UseState<K[], N, Getters<K[]>, Setters, Actions, SetMethods<any>>;

export declare function defineRecoilSelector<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters>(config: RecoilValueConfig<S, N, G, SE>, atm?: RecoilState<S>): RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>;

export declare function defineRecoilState<S, RS extends CallbackState<RecoilState<S>, any> | RecoilState<S>, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = RS extends CallbackState<any, infer M> ? M : SetMethods<any>>(config: RecoilStateConfig<S, RS, N, G, SE, A, CBM>): UseState<S, N, G, SE, A, CBM>;

export declare function defineRecoilValue<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CB extends RecoilCallback = RecoilCallback>(config: RecoilValueConfig<S, N, G, SE, A, CB>, atm?: RecoilState<S>): UseRecoilValue<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object>;

export declare function defineRecoilValueAndSelector<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CB extends RecoilCallback = RecoilCallback>(config: RecoilValueConfig<S, N, G, SE, A, CB>, atm?: RecoilState<S>, sel?: RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>): [
UseRecoilValue<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object>,
RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>
];

export declare const defineSelectItemsState: <T extends KeyItem<K>, K = T extends KeyItem<infer P> ? P : React_2.Key, N extends string = string>(name?: N) => UseState<{
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

export declare function defineUseCallbackRecoilState<S, RS extends RecoilCallbackState<S, SetMethods<S>> | RecoilState<S>, CBM extends SetMethods<S> = RS extends RecoilCallbackState<S, infer M> ? M : SetMethods<any>>(state: RS): () => [S, CBM];

export declare function defineUseCallbackState<S extends CallbackState<any, any> | any, CBM extends SetMethods<S extends CallbackState<infer St, any> ? St : S> = SetMethods<S extends CallbackState<infer St, any> ? St : S>>(state: S): (initialState?: S extends CallbackState<infer St, any> ? St : S) => [S extends CallbackState<infer St, any> ? St : S, CBM];

export declare function defineUseState<S extends CallbackState<any, any> | any, N extends string = 'state', G extends Getters<any> = Getters<S extends CallbackState<infer St, any> ? St : S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>>(config: StateConfig<S, N, G, SE, A, CBM>): UseState<S extends CallbackState<infer St, any> ? St : S, N, G, SE, A, CBM>;

export declare function getDefaultMethods<S, N extends string = 'state', CBM extends SetMethods<S> = S extends CallbackState<S, infer M> ? M : SetMethods<S>>(name: N, defineState: S, cbm: CBM): SetMethods<S> & {
    setProps: (prop: Partial<S>) => void;
    reset: () => void;
    deepSet: <KS extends readonly ExtractNestedKeys<S, "children", UnwrapNullable<S>>[]>(keys: KS, any: NestedPropType<KS, S>) => void;
    deepMerge: <KS_1 extends readonly ExtractNestedKeys<S, "children", UnwrapNullable<S>>[]>(keys: KS_1, any: Partial<NestedPropType<KS_1, S>>) => void;
} & {
    get: () => S;
} & PropName<S, N> & CBM;

export declare function getDefaultSetMethods<S>(set: React.Dispatch<SetStateAction<S>>, initialState?: S): S extends (infer T)[] ? ItemsDefaultMethods<T> : DefaultSetMethods<S>;

export declare function getSelectorDefaultMethods<S, N extends string>(key: N, atm: RecoilState<S>, defineState: S, { get, getCallback }: {
    get: GetRecoilValue;
    getCallback: GetCallback;
}): SelectorDefaultMethods<S, N>;

export declare interface GetterFn<S = any, Args extends Array<any> = any, R = any> {
    (...args: [S, ...Args]): R;
}

export declare type GetterMethods<S = any, G extends Getters<S> = Getters<S>> = {
    [P in keyof G]: G extends Record<P, GetterFn<S, infer Args, infer R>> ? (...args: Args) => R : unknown;
};

export declare function getterMethods<S, G extends Getters<S>>(getters: G, state: S, context: any): GetterMethods<S, G>;

export declare type Getters<S = any> = Recordable<GetterFn<S>>;

export declare type ItemsDefaultMethods<T = any, N extends string = 'state'> = DefaultMethods<T[], N> & ItemsDefaultSetMethods<T>;

export declare type ItemsDefaultSetMethods<T = any> = {
    add: (newItem: T) => void;
    remove: (item: T) => void;
    removes: (items: T[]) => void;
    clear: () => void;
};

export declare interface KeyItem<K = React.Key> extends Recordable {
    key: K;
}

export declare interface RecoilCallback<CBM = object> {
    (): CBM;
}

export declare interface RecoilCallbackState<S, CBM extends SetMethods<S>> {
    (): [RecoilState<S>, CBM];
}

export declare interface RecoilStateConfig<S, RS extends CallbackState<RecoilState<S>, any> | RecoilState<S>, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = RS extends CallbackState<any, infer M> ? M : SetMethods<any>> {
    name: N;
    defaultValue: S;
    useState: RS;
    getters?: G & ThisType<PropName<S extends CallbackState<infer St, any> ? St : S, N> & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>>;
    setters?: SE & ThisType<(S extends Array<infer T> ? ItemsDefaultSetMethods<T> & DefaultSetMethods<T[]> : DefaultSetMethods<S extends CallbackState<infer St, any> ? St : S>) & SetterMethods<SE> & CBM>;
    actions?: A & ThisType<(S extends Array<infer T> ? ItemsDefaultMethods<T, N> : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>) & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G> & SetterMethods<SE> & ActionMethods<A> & CBM>;
}

export declare type RecoilValueAsyncMethods<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends Recordable<any> = object> = RecoilValueMethods<S, N, G, SE, CBM> & ActionMethods<A>;

export declare interface RecoilValueConfig<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CB extends RecoilCallback = RecoilCallback> extends BaseSelectorStateConfig<S, N, G, SE> {
    useFn?: CB;
    actions?: A & ThisType<(S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>) & GetterMethods<S, G> & SetterMethods<SE> & ActionMethods<A> & (CB extends RecoilCallback<infer CBM> ? CBM : object)>;
}

export declare type RecoilValueMethods<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, CBM extends Recordable<any> = object> = GetterMethods<S, G> & SetterMethods<SE> & (S extends any[] ? SelectorItemsDefaultMethods<S, N> : SelectorDefaultMethods<S, N>) & CBM;

export declare type RelationHookMap<S> = {
    [key in keyof S]: [S[key], React.Dispatch<SetStateAction<S[key]>> | SetMethods<S[key]>];
};

export declare type RelationStateMethods<S extends object, RHM extends RelationHookMap<S>> = SetMethods<S> & {
    [key in keyof S]: RHM[key] extends [S[key], infer M] ? M extends React.Dispatch<SetStateAction<S[key]>> ? SetMethods<S[key]> : M extends SetMethods<S[key]> ? M : unknown : unknown;
};

export declare interface SelectItem<T extends KeyItem<K> = any, K = T extends KeyItem<infer Key> ? Key : React_2.Key> {
    itemsState: T[];
    selectKeysState: K[];
}

export declare type SelectorDefaultMethods<S = any, N extends string = 'state'> = {
    refresh: () => void;
    get: () => S;
    set: (state: S | ((state: S) => S)) => void;
    setProps: (prop: Partial<S>) => void;
    deepSet: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: NestedPropType<KS, S>) => void;
    deepMerge: <KS extends readonly ExtractNestedKeys<S>[]>(keys: KS, any: Partial<NestedPropType<KS, S>>) => void;
    reset: () => void;
    getState: GetRecoilValue;
} & PropName<S, N>;

export declare type SelectorItemsDefaultMethods<S extends any[] = any[], N extends string = 'state'> = SelectorDefaultMethods<S, N> & {
    add: (newItem: S extends Array<infer P> ? P : unknown) => void;
    remove: (item: S extends Array<infer P> ? P : unknown) => void;
    removes: (items: (S extends Array<infer P> ? P : unknown)[]) => void;
    clear: () => void;
};

export declare interface SetMethods<S> {
    set: React.Dispatch<React.SetStateAction<S>>;
}

export declare interface SetterFn<Args extends Array<any> = any, R = any> {
    (...args: Args): R;
}

export declare type SetterMethods<S extends Setters> = {
    [P in keyof S]: S extends Record<P, SetterFn<infer Args, infer R>> ? SetterFn<Args, R> : unknown;
};

export declare function setterMethods<SE extends Setters>(actions: SE, context: any): SetterMethods<SE>;

export declare type Setters = Recordable<SetterFn>;

export declare interface StateConfig<S extends CallbackState<any, any> | any, N extends string = 'state', G extends Getters<any> = Getters<S extends CallbackState<infer St, any> ? St : S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> {
    name: N;
    useState: S;
    getters?: G & ThisType<PropName<S extends CallbackState<infer St, any> ? St : S, N> & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G>>;
    setters?: SE & ThisType<(S extends Array<infer T> ? ItemsDefaultSetMethods<T> & DefaultSetMethods<T[]> : DefaultSetMethods<S extends CallbackState<infer St, any> ? St : S>) & SetterMethods<SE> & CBM>;
    actions?: A & ThisType<(S extends Array<infer T> ? ItemsDefaultMethods<T, N> : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>) & GetterMethods<S extends CallbackState<infer St, any> ? St : S, G> & SetterMethods<SE> & ActionMethods<A> & CBM>;
}

export declare type StateMethods<S extends CallbackState<any, any> | any = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> = GetterMethods<S, G> & SetterMethods<SE> & ActionMethods<A> & (S extends Array<infer T> ? ItemsDefaultMethods<T, N> : DefaultMethods<S extends CallbackState<infer St, any> ? St : S, N>) & CBM;

export declare const useActiveItemsState: UseState<{
    itemsState: KeyItem<Key>[];
    activeKeyState: Key | undefined;
}, string, {
    getActiveItem(state: ActiveItem<KeyItem<Key>, Key>): KeyItem<Key>[];
    getActiveKey(state: ActiveItem<KeyItem<Key>, Key>): Key | undefined;
}, {
    active(key: Key): void;
    addAndActive(item: KeyItem<Key>): void;
    addOrUpdateAndActive(item: KeyItem<Key>): void;
    clear(): void;
}, {
    removeByKey(key: Key): void;
    removeLeft(key: Key): void;
    removeRight(key: Key): void;
    removeOther(key: Key): void;
}, RelationStateMethods<{
    itemsState: KeyItem<Key>[];
    activeKeyState: Key | undefined;
}, {
    itemsState: UseStateReturnType<KeyItem<Key>[], "state", {
        getByKey(state: KeyItem<Key>[], k: Key): KeyItem<Key>;
        getByKeys(state: KeyItem<Key>[], k: Key): KeyItem<Key>[];
    }, {
        addByKey(item: KeyItem<Key>): void;
        updateByKey(newItem: KeyItem<Key>): void;
        addOrUpdateByKey(item: KeyItem<Key>): void;
        removeByKey(k: Key): void;
        removeByKeys(keys: Key[]): void;
    }, Actions, SetMethods<any>>;
    activeKeyState: [Key | undefined, Dispatch<SetStateAction<Key | undefined>>];
}>>;

export declare function useCompInstance<T extends BaseInstance<P>, P = T extends BaseInstance<infer Props> ? Props : unknown>(props?: P, name?: string): UseCompInstanceReturnType<P, T>;

export declare type UseCompInstanceReturnType<P, T extends BaseInstance<P>> = [React.MutableRefObject<T | null>, Partial<T>];

export declare function useDesign(scope: string, prefixCls?: string): {
    prefixCls: string;
    prefixVar: string;
};

export declare const useItemsState: UseState<any[], "itemsState", Getters<any[]>, Setters, Actions, SetMethods<any>>;

export declare const useKeyItemsState: UseState<KeyItem<Key>[], "state", {
    getByKey(state: KeyItem<Key>[], k: Key): KeyItem<Key>;
    getByKeys(state: KeyItem<Key>[], k: Key): KeyItem<Key>[];
}, {
    addByKey(item: KeyItem<Key>): void;
    updateByKey(newItem: KeyItem<Key>): void;
    addOrUpdateByKey(item: KeyItem<Key>): void;
    removeByKey(k: Key): void;
    removeByKeys(keys: Key[]): void;
}, Actions, SetMethods<any>>;

export declare const useKeysState: UseState<Key[], "keysState", Getters<Key[]>, Setters, Actions, SetMethods<any>>;

export declare const useMountEffect: (fn: React_3.EffectCallback) => void;

export declare function useNativeProps<T extends Recordable>(props: T, options?: UseNativePropsOptions): T;

declare interface UseNativePropsOptions {
    excludeListeners?: boolean;
    excludeKeys?: string[];
    excludeDefaultKeys?: boolean;
}

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

export declare interface UseRecoilValue<S, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends Recordable<any> = object> {
    (initialState?: S): UseRecoilValueReturnType<S, N, G, SE, A, CBM>;
}

export declare type UseRecoilValueReturnType<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends Recordable<any> = object> = [S, RecoilValueAsyncMethods<S, N, G, SE, A, CBM>];

export declare function useRelationState<RHM extends RelationHookMap<any>, S extends object = RHM extends RelationHookMap<infer SO> ? SO : object>(hookMap: RHM): UseRelationStateReturnType<S, RHM>;

export declare type UseRelationStateReturnType<S extends object, RHM extends RelationHookMap<S>> = [S, RelationStateMethods<S, RHM>];

export declare const useSelectItemsState: UseState<{
    itemsState: KeyItem<Key>[];
    selectKeysState: Key[];
}, string, {
    getSelectedItems(state: SelectItem<KeyItem<Key>, Key>): KeyItem<Key>[];
}, {
    select(keys: Key[]): void;
    reSelect(keys: Key[]): void;
    addAndSelect(item: KeyItem<Key>): void;
    addOrUpdateAndSelect(item: KeyItem<Key>): void;
    clear(): void;
}, {
    removeByKey(key: Key): void;
}, RelationStateMethods<{
    itemsState: KeyItem<Key>[];
    selectKeysState: Key[];
}, {
    itemsState: UseStateReturnType<KeyItem<Key>[], "state", {
        getByKey(state: KeyItem<Key>[], k: Key): KeyItem<Key>;
        getByKeys(state: KeyItem<Key>[], k: Key): KeyItem<Key>[];
    }, {
        addByKey(item: KeyItem<Key>): void;
        updateByKey(newItem: KeyItem<Key>): void;
        addOrUpdateByKey(item: KeyItem<Key>): void;
        removeByKey(k: Key): void;
        removeByKeys(keys: Key[]): void;
    }, Actions, SetMethods<any>>;
    selectKeysState: UseStateReturnType<Key[], "keysState", Getters<Key[]>, Setters, Actions, SetMethods<any>>;
}>>;

export declare interface UseState<S = any, N extends string = 'state', G extends Getters<any> = Getters<S>, SE extends Setters = Setters, A extends Actions = Actions, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> {
    (initialState?: S): UseStateReturnType<S, N, G, SE, A, CBM>;
}

export declare type UseStateReturnType<S = any, N extends string = 'state', G extends Getters<any> = any, SE extends Setters = any, A extends Actions = any, CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>> = [S, StateMethods<S, N, G, SE, A, CBM>];

export declare const useUnmountEffect: (fn: () => void) => void;

export { }
