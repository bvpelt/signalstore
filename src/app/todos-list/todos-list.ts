import { Component, inject } from "@angular/core";
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
}
