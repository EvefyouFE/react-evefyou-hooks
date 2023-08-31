import { useState } from "react";
import { CallbackState, SetMethods } from "../types/state";
import { is } from "ramda";

export function defineUseCallbackState<
  S extends CallbackState<any, any> | any,
  CBM extends SetMethods<S extends CallbackState<infer St, any> ? St : S> =
  SetMethods<S extends CallbackState<infer St, any> ? St : S>
>(
  state: S
): (initialState?: S extends CallbackState<infer St, any> ? St : S)
    => [S extends CallbackState<infer St, any> ? St : S, CBM] {
  const useCallbackState = is(Function, state) ? state as
    CallbackState<S extends CallbackState<infer St, any> ? St : S, CBM> : useNativeState;

  function useNativeState(
    initialState?: S extends CallbackState<infer St, any> ? St : S
  ): [S extends CallbackState<infer St, any> ? St : S, CBM] {
    const [s, set] = useState(initialState ?? state as S extends CallbackState<infer St, any> ? St : S);
    return [s, { set } as CBM];
  }

  return useCallbackState;
}