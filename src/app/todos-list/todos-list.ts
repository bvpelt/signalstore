import { Component, effect, ElementRef, inject, viewChild } from "@angular/core";
import { MatFormField, MatSuffix } from "@angular/material/form-field";
import { MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule, MatIcon } from "@angular/material/icon";
import {
  MatButtonToggleModule,
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleChange,
} from "@angular/material/button-toggle";
import { MatListModule, MatSelectionList } from "@angular/material/list";
import { TodosFilter, TodosStore } from "../store/todos.store";

@Component({
  selector: "todos-list",
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconModule,
    MatSuffix,
    MatButtonToggleModule,
    MatButtonToggle,
    MatSelectionList,
    MatListModule,
  ],
  templateUrl: "./todos-list.html",
  styleUrl: "./todos-list.scss",
})
export class TodosList {
  store = inject(TodosStore);
  filter = viewChild.required(MatButtonToggleGroup);
  todoInput = viewChild.required<ElementRef<HTMLInputElement>>("input");
  
  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();
    });
  }

  async onAddTodo(title: string) {
    if (title.trim()) {
      await this.store.addTodo(title.trim());
      this.todoInput().nativeElement.value = "";
    }
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  async onTodoToggled(id: string, completed: boolean) {
    await this.store.updateTodo(id, !completed);
  }

  onFilterTodos(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;
    this.store.updateFilter(filter);
  }
}
