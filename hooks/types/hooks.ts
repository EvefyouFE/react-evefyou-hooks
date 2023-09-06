import { SetStateAction } from "react";
import { SetMethods } from "./state";
import { Recordable } from "react-evefyou-common";

export type UseCompInstanceReturnType<P, T extends BaseInstance<P>> = [React.MutableRefObject<T | null>, Partial<T>]

export interface BaseInstance<P> {
  init?: (props: P) => void;
  initDebug?: (props: P, name?: string) => void;
}

export interface UsePropsSetMethods<P> extends BaseInstance<P> {
  setProps: (props: P) => void;
  setPropsState: React.Dispatch<React.SetStateAction<P>>;
  resetProps: (props: P) => void;
}

export type UsePropsMethods<T> = UsePropsSetMethods<T>;

export type UsePropsReturnType<T> = [T, UsePropsMethods<T>]

export type UsePropsStateReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>]


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

export interface KeyItem<K = React.Key> extends Recordable {
  key: K
}

export interface ActiveItem<T extends KeyItem<K> = any, K = T extends KeyItem<infer Key> ? Key : React.Key> {
  itemsState: T[];
  activeKeyState?: K;
}