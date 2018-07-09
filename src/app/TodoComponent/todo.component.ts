import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

interface AppState {
  enterprise: number;
}

@Component({
  selector: "todo-component",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  public tasks = [
    { text: "Tarea 1 - Enterprise 1", done: false, enterprise: 1 },
    { text: "Tarea 2 - Enterprise 1", done: false, enterprise: 1 },
    { text: "Tarea 3 - Enterprise 2", done: false, enterprise: 2 },
    { text: "Tarea 4 - Enterprise 2", done: false, enterprise: 2 },
    { text: "Tarea 5 - Enterprise 3", done: false, enterprise: 3 },
    { text: "Tarea 6 - Enterprise 3", done: false, enterprise: 3 }
  ];

  public filteredTasks = [];

  selectedEnterprise: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(val => {
      this.selectedEnterprise = val.enterprise;
      this.filterTasks(this.selectedEnterprise);
    });
  }

  filterTasks(enterprise: number) {
    this.filteredTasks = this.tasks.filter(
      task => enterprise === 0 || task.enterprise === enterprise
    );
  }
}
