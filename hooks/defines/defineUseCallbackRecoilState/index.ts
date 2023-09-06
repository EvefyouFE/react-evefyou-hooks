/*
 * @Author: EvefyouFE/evef
 * @Date: 2023-08-27 00:41:19
 * @FilePath: \react-evefyou-hooks\src\state\defineUseCallbackRecoilState.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */

import { RecoilState, useRecoilState } from "recoil";
import { RecoilCallbackState, SetMethods } from "../../types/state";
import { is } from "ramda";

export function defineUseCallbackRecoilState<
  S,
  RS extends RecoilCallbackState<S, SetMethods<S>> | RecoilState<S>,
  CBM extends SetMethods<S> = RS extends RecoilCallbackState<S, infer M> ? M : SetMethods<any>
>(
  state: RS,
): () => [S, CBM] {

  function useCallbackState(): [S, CBM] {
    const [stateAtom, methods] = is(Function, state)
      ? (state as RecoilCallbackState<S, SetMethods<S>>)()
      : [state as RecoilState<S>, undefined]
    const [s, set] = useRecoilState(stateAtom);
    return [s, { set, ...methods } as CBM];
  }

  return useCallbackState;
}