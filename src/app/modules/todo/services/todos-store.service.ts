import { Injectable } from '@angular/core';
import { observable, action, computed, observe } from "mobx";
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../model/todo-item';
import { TodosFilterStoreService } from './todos-filter-store.service';

@Injectable({
  providedIn: "root"
})
export class TodosStoreService {

  @observable todos: Todo[] = [];
  stateChange: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private todosFilter: TodosFilterStoreService) {}

  @action
  addNewTodoItem( { title } : Partial<Todo> ) {
    this.todos = [
      ...this.todos,
      new Todo({title})
    ];
    this.stateChange.next(true);
  }

  @action
  removeTodoItem(todo) {
    const idx = this.todos.indexOf(todo, 0);
    if (idx != -1) {
      this.todos.splice(idx, 1);
      this.stateChange.next(true);
    }
  }

  @action
  completeAll() {
    this.todos.forEach(todo => todo.setDone(true));
    this.stateChange.next(true);
  }

  @action
  uncompleteAll() {
    this.todos.forEach(todo => todo.setDone(false));
    this.stateChange.next(true);
  }

  @computed
  get retrieveByFilter() {
    switch (this.todosFilter.currentFilter) {
      case 'ALL' :
        return this.todos;
      case 'COMPLETED':
        return this.todos.filter((item) => item.done);
      case 'ACTIVE':
        return this.todos.filter((item) => !item.done);
    }
  }
}
