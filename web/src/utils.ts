function dummyFunction(): void {
  return;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** complexity O(n) */
function nextEnum<T>(current: T, values: ReadonlyArray<T>): T {
  const currentIdx = values.indexOf(current);
  return currentIdx >= values.length - 1 ? values[0] : values[currentIdx + 1];
}

function identity<T>(t: T): T {
  return t;
}

function logicNot(value: boolean): boolean {
  return !value;
}

/** both params are inclusive */
function randomInt(max: number, min?: number): number {
  const base = min ? min : 0;
  requireTrue(max > base, "max must > min");
  const ceiling = max - base;
  return Math.floor(Math.random() * Math.floor(ceiling)) + base;
}

/** Not undefined, not null, not empty string. */
function checkNonEmpty<T>(v: T | undefined): T {
  if (v === null) {
    throw new TypeError("Value is null");
  } else if (v === undefined) {
    throw new TypeError("Value is undefined");
  } else if (typeof v === "string" && v.length === 0) {
    throw new Error("Value is empty string.");
  }
  return v;
}

function isEmpty<T>(v: T | undefined): boolean {
  if (v === null || v === undefined) {
    return true;
  } else if (typeof v === "number" && isNaN(v)) {
    return true;
  } else if (typeof v === "string" && v.length === 0) {
    return true;
  }
  return false;
}

function fallback<T>(v: T | undefined, defaultValue: T): T {
  return v ? v : defaultValue;
}

function throwTypeError<T>(v: T): void {
  throw new TypeError("unknown type:" + v);
}

function requireTrue(condition: boolean, msg?: string) {
  if (!condition) {
    throw new Error(msg);
  }
}

function findIndexOfLast<T>(arr: ReadonlyArray<T>, predicate: (elem: T, idx: number) => boolean): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    if (predicate(element, i)) return i;
  }
  return -1;
}

function shallowCompare<T>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) return true;
  if (obj1 === undefined || obj2 === undefined) return false;
  if (obj1 === null || obj2 === null) return false;
  return Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

function isNumeric(num: string | number): boolean {
  return !isNaN(num as number);
}

function stringCompare(a: string, b: string): number {
  if (a === b) return 0;
  if (a < b) return -1;
  return 1;
}

function numberSum(a: number, b: number): number {
  return a + b;
}

export {
  dummyFunction,
  delay,
  nextEnum,
  identity,
  logicNot,
  randomInt,
  checkNonEmpty,
  fallback,
  throwTypeError,
  findIndexOfLast,
  isEmpty,
  shallowCompare,
  isNumeric,
  stringCompare,
  numberSum
};

export const Collections = Object.seal({
  emptyArray: Object.seal([]),
});
