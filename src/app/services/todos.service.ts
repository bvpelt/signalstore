import { Injectable } from "@angular/core";
import { TODOS } from "../model/mock-data";

@Injectable({ providedIn: "root" })
export class TodosService {

  /* Using mock data with a simulated delay to mimic a real HTTP call */
  async getTodos() {
    await sleep(1000); // simulate network delay of 1000ms
    return TODOS;
  }
}

async function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}