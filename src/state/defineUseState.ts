import { useMemo } from "react"
import { Actions, CallbackState, Getters, SetMethods, Setters, StateConfig, StateMethods, UseState, UseStateReturnType } from "../types/state"
import { actionMethods, getDefaultMethods, getDefaultSetMethods, getterMethods, setterMethods } from "./base"
import { defineUseCallbackState } from "./defineUseCallbackState"

export function defineUseState<
  S extends CallbackState<any, any> | any,
  N extends string = 'state',
  G extends Getters<any> = Getters<S extends CallbackState<infer St, any> ? St : S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends SetMethods<any> = S extends CallbackState<any, infer M> ? M : SetMethods<any>,
>(
  config: StateConfig<S, N, G, SE, A, CBM>,
): UseState<S extends CallbackState<infer St, any> ? St : S, N, G, SE, A, CBM> {
  const { getters = {} as G, actions = {} as A, setters = {} as SE, name, useState: state } = config
  const useCallbackState = defineUseCallbackState(state)

  function useDefineState(
    initialState?: S extends CallbackState<infer St, any> ? St : S
  ): UseStateReturnType<S extends CallbackState<infer St, any> ? St : S, N, G, SE, A, CBM> {
    const [defineState, callbackMethods] = useCallbackState(initialState)
    const { set } = callbackMethods
    const defaultSetMethods = useMemo(() => getDefaultSetMethods(set, initialState), [initialState, set])
    const defaultMethods = getDefaultMethods(name, defineState, callbackMethods)
    const methods = {} as StateMethods<S extends CallbackState<infer St, any> ? St : S, N, G, SE, A, CBM>
    Object.assign(methods, {
      ...defaultSetMethods,
      ...defaultMethods,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const settersMemo = useMemo(() => setterMethods(setters, methods), [defaultSetMethods])
    Object.assign(methods, {
      ...getterMethods(getters, defineState, methods),
      ...settersMemo,
    })
    actions && Object.assign(methods, actionMethods(actions, methods))
    return [defineState, methods]
  }

  return useDefineState
}