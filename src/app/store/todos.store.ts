import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { inject } from "@angular/core";
import { Todo } from "../model/todo.model";
import { TodosService } from "../services/todos.service";

export type TodosFilter = "all" | "pending" | "completed";

type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: "all",
};

// The store definition

export const TodosStore = signalStore(
  { providedIn: "root" },
  withState(initialState), // state
  withMethods(
    // behaviour
    (store, todosService = inject(TodosService)) => ({
      async loadAll() {
        patchState(store, { loading: true }); // partial update of the state
        const todos = await todosService.getTodos();
        patchState(store, { todos, loading: false });
      },
    })
  )
);
