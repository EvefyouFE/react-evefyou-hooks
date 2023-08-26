import { RecoilState, RecoilValueReadOnly, atom, selector } from "recoil";
import { Getters, RecoilValueConfig, RecoilValueMethods, Setters } from "../types/state";
import { getSelectorDefaultMethods, getterMethods, setterMethods } from "./base";

export function defineRecoilSelector<
  S,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
>(
  config: RecoilValueConfig<S, N, G, SE>,
  atm?: RecoilState<S>
): RecoilValueReadOnly<[S, RecoilValueMethods<S, N, G, SE>]> {
  const { getters = {} as G, setters = {} as SE, name: key, state } = config
  const stateAtom = atm ?? atom<S>({
    key: key.concat('Atom'),
    default: state
  });

  const stateSelector = selector<[
    S,
    RecoilValueMethods<S, N, G, SE>
  ]>({
    key: key.concat('Selector'),
    get: ({ get, getCallback }) => {
      const defineState = get(stateAtom)
      const methods = {
        ...getSelectorDefaultMethods(key, stateAtom, defineState, { get, getCallback }),
      } as RecoilValueMethods<S, N, G, SE>
      Object.assign(methods, {
        ...getterMethods(getters, defineState, methods),
        ...setterMethods(setters, methods),
      })
      return [defineState, methods]
    }
  });

  return stateSelector
}
