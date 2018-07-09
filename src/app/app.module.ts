import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";

import { CustomMaterialModule } from "./material.module";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./TodoComponent/todo.component";
import { selectedEnterprise } from "./store/enterprise.store";

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CustomMaterialModule,
    StoreModule.forRoot({ enterprise: selectedEnterprise })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
