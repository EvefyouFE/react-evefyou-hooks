import { RecoilState } from "recoil";
import { Actions, Getters, RecoilCallback, RecoilValueConfig, Setters, UseRecoilValue } from "@/types";
import { defineRecoilValueAndSelector } from "./defineRecoilValueAndSelector";

export function defineRecoilValue<
  S,
  N extends string = 'state',
  G extends Getters<any> = Getters<S>,
  SE extends Setters = Setters,
  A extends Actions = Actions,
  CB extends RecoilCallback = RecoilCallback,
>(
  config: RecoilValueConfig<S, N, G, SE, A, CB>,
  atm?: RecoilState<S>,
): UseRecoilValue<S, N, G, SE, A, CB extends RecoilCallback<infer CBM> ? CBM : object> {
  return defineRecoilValueAndSelector(config, atm)[0]
}