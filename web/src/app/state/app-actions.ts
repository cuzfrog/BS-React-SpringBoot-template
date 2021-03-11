import { createActionWithPayload } from "src/types-utils";

export const AppActionType = {
  AJAX_ERROR: "[app] ajax error",
  ERROR_MSG: "[app] error msg",
} as const;

export const AppActions = {
  ajaxError: (err?: AjaxError) => createActionWithPayload(AppActionType.AJAX_ERROR, err),
  errorMsg: (msg: string) => createActionWithPayload(AppActionType.ERROR_MSG, msg),
} as const;

export type AppAction = import("src/types-utils").ActionUnion<typeof AppActions>;