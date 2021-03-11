import produce from "immer";
import { AppActionType } from "./app-actions";

type AppState = import("./app-state").AppState;
type AppAction = import("./app-actions").AppAction;

export function appReducer(_s: AppState, a: AppAction): AppState {
  return produce(_s, (draft: AppState) => {
    switch (a.type) {
      case AppActionType.AJAX_ERROR: {
        console.error(a.payload);
        draft.errorMsg = a.payload?.error;
        break;
      }
      case AppActionType.ERROR_MSG: {
        draft.errorMsg = a.payload;
        break;
      }
    }
  });
}
