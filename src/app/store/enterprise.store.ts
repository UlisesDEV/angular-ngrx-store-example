import { Action } from "@ngrx/store";

export const SELECTED_ENTERPRISE = "SELECTED_ENTERPRISE";

let enterprise = 0;

export function selectedEnterprise(state: number = enterprise, action: Action) {
  switch (action.type) {
    case SELECTED_ENTERPRISE:
      enterprise = action.payload.enterpriseId;
      return enterprise;
    default:
      return enterprise;
  }
}
