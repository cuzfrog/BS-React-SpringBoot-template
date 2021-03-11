import { Specs } from "../specs";

const host = Specs.system.serverUrl;

function test(): string {
  return `${host}/test`;
}


export const Endpoints = Object.freeze({
  test,
} as const);
