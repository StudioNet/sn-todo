import { Injectable } from '@angular/core';
import { observable, action } from "mobx";

export type TodosFilters = 'ALL' | 'COMPLETED' | 'ACTIVE';

@Injectable({
  providedIn: "root"
})
export class TodosFilterStoreService {
  @observable currentFilter: TodosFilters = 'ALL';

  @action
  changeTo(filter: TodosFilters) {
    this.currentFilter = filter;
  }
}
