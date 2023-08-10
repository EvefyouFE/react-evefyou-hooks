/*
 * @Author: EvefyouFE
 * @Date: 2023-08-09 01:50:57
 * @FilePath: \react-evefyou-hooks\src\hooks\core\useMountEffect.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import * as React from 'react';
export const useMountEffect = (fn: React.EffectCallback) => React.useEffect(fn, []);
export default useMountEffect;