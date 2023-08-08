import { clone, equals, is, mergeDeepRight } from 'ramda';
import { Recordable } from "react-evefyou-hooks";

export function deepMergeObjectByKeys(
  keys: readonly any[],
  value: any,
  obj: Recordable,
) {
  const newObj = {} as typeof obj;
  let target = newObj;
  keys.forEach((k, idx) => {
    target[k] = idx === keys.length - 1 ? value : {};
    target = target[k];
  });
  return mergeDeepRight(obj, newObj);
}

export function deepSetObjectByKeys(
  keys: readonly any[],
  value: any,
  obj: Recordable,
) {
  const newObj = clone(obj);
  let target = newObj;
  keys.forEach((k, idx) => {
    target[k] = idx === keys.length - 1 ? value : target[k];
    target = target[k];
  });
  return newObj;
}
export function deepCompareObj(prevProps: any, nextProps: any): boolean {
  if (is(Array, prevProps) && is(Array, nextProps)) {
    if (prevProps.length !== nextProps.length) return false;
    return !prevProps.some((pItem, idx) => !deepCompareObj(nextProps[idx], pItem))
  }
  return equals(prevProps, nextProps)
}