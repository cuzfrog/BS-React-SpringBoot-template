import { checkNonEmpty } from "src/utils";

interface Action<T> {
  type: T;
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  readonly payload: P;
}

interface ActionWithUrl<T extends string> extends Action<T> {
  readonly url: string;
}

export function createAction<T extends string, P>(type: T): Action<T> {
  return Object.freeze({ type: checkNonEmpty(type) });
}

export function createActionWithPayload<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P> {
  return Object.freeze({ type: checkNonEmpty(type), payload });
}

export function createActionWithUrl<T extends string, P>(type: T, url: string): ActionWithUrl<T> {
  return Object.freeze({ type: checkNonEmpty(type), url });
}

type FunctionType = (...arg: any[]) => any;

interface MapObject {
  [actionCreator: string]: FunctionType;
}

export type ActionUnion<A extends MapObject> = ReturnType<A[keyof A]>;
