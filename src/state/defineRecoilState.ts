import { useMemo } from "react"
import { Actions, CallbackState, Getters, RecoilStateConfig, SetMethods, Setters, StateMethods, UseState, UseStateReturnType } from "../types/state"
import { actionMethods, getDefaultMethods, getDefaultSetMethods, getterMethods, setterMethods } from "./base"
import { RecoilState } from "recoil"
import { defineUseCallbackRecoilState } from "./defineUseCallbackRecoilState"

export function defineRecoilState<
  S,
  RS extends CallbackState<RecoilState<S>, any> | RecoilState<S>,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CBM extends SetMethods<any> = RS extends CallbackState<any, infer M> ? M : SetMethods<any>
>(
  config: RecoilStateConfig<S, RS, N, G, SE, A, CBM>,
): UseState<S, N, G, SE, A, CBM> {
  const { getters = {} as G, actions = {} as A, setters = {} as SE, name, useState: state, defaultValue } = config

  const useCallbackState = defineUseCallbackRecoilState<S, RS, CBM>(state)

  function useDefineState(): UseStateReturnType<S, N, G, SE, A, CBM> {
    const [defineState, callbackMethods] = useCallbackState()
    const { set } = callbackMethods
    const defaultSetMethods = getDefaultSetMethods(set, defaultValue)
    const methods = {} as StateMethods<S, N, G, SE, A, CBM>
    const defaultMethods = getDefaultMethods(name, defineState, callbackMethods)
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