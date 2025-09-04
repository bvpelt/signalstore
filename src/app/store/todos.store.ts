import { Todo } from "../model/todo.model";

export type TodosFilter = 
"all" | "pending" | "completed";

type TodosState = {
    todos: Todo[];
    loading: boolean;
    filter: TodosFilter;
    
}

const initialState: TodosState = {
    todos: [],
    loading: false,
    filter: "all"
}

// The store definition

export const TodosStore = signalStore(
    {providedIn: 'root'},
    withState( initialState)

);