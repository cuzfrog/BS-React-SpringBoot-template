import { Endpoints } from "./endpoints";

export const AjaxRequests = Object.freeze({
  test: () => createRequest(
    Endpoints.test(),
    { method: "GET" }
  ),
} as const);

function createRequest<Data>(url: string, config: RequestInit): AjaxRequest<Data> {
  return { url, config };
}
