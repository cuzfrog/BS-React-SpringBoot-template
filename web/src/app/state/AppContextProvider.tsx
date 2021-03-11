import React, { useContext, ReactNode, useReducer } from "react";
import { AppState, appReducer } from ".";

type AppAction = import("./app-actions").AppAction;
type AppDispatch = (action: AppAction) => void;
const AppDispatchContext = React.createContext({} as AppDispatch);
const AppStateContext = React.createContext({} as AppState);

interface Props {
  children: ReactNode;
}

export function AppContextProvider(props: Props): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, AppState.default);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {props.children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export function useAppDispatch(): AppDispatch {
  return useContext(AppDispatchContext);
}
