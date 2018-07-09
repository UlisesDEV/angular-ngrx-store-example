import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { SELECTED_ENTERPRISE } from "./store/enterprise.store";

interface AppState {
  type: string;
  payload?: any;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  selectedEnterprise = 0;

  constructor(private store: Store<AppState>) {}

  changeEnterprise(enterpriseId: number) {
    this.store.dispatch({
      type: SELECTED_ENTERPRISE,
      payload: { enterpriseId: enterpriseId }
    });
  }
}
