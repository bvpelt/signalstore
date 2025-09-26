//import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
//import { Component, inject } from "@angular/core";
import { MatFormField, MatSuffix } from "@angular/material/form-field";
import { MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatListModule } from "@angular/material/list";
import { TodosStore } from "../store/todos.store";

@Component({
  selector: "todos-list",
  imports: [
    //    CommonModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatIconModule,
    MatSuffix,
    MatButtonToggleModule,
    MatListModule,
  ],
  templateUrl: "./todos-list.html",
  styleUrl: "./todos-list.scss",
})
export class TodosList {
  store = inject(TodosStore);

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, !completed);
  }
}
