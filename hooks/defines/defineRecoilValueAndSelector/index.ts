import { Actions, Getters, RecoilCallback, RecoilValueAsyncMethods, RecoilValueConfig, RecoilValueMethods, Setters, UseRecoilValue, UseRecoilValueReturnType } from "../../types/state"
import { actionMethods, } from "../baseDefine"
import { RecoilState, RecoilValueReadOnly, atom, useRecoilValue } from "recoil"
import { defineRecoilSelector } from "../../defineRecoilSelector";


export function defineRecoilValueAndSelector<
  S,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CB extends RecoilCallback = RecoilCallback,
>(
  config: RecoilValueConfig<S, N, G, SE, A, CB>,
  atm?: RecoilState<S>,
  sel?: RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>
): [
    UseRecoilValue<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object>,
    RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]>
  ] {
  const { actions = {} as A, useFn, ...rest } = config
  const stateAtom = atm ?? atom<S>({
    key: rest.name.concat('Atom'),
    default: rest.state
  });
  const stateSelector = sel ?? defineRecoilSelector(rest, stateAtom)

  function useDefineValue(): UseRecoilValueReturnType<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object> {
    const [recoilState, recoilMethods] = useRecoilValue(stateSelector)
    const useMethods = useFn?.()
    const methods = {
      ...useMethods,
      ...recoilMethods
    } as RecoilValueAsyncMethods<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object>
    actions && Object.assign(methods, actionMethods(actions, methods))
    return [recoilState, methods]
  }
  return [useDefineValue, stateSelector]
}