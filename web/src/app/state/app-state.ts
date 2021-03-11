export interface AppState {
  errorMsg?: string;
}

const DefaultValue: AppState = {

} as const;

export const AppState = {
  default: DefaultValue,
} as const;
