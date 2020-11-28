import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { toRxJsObservable } from 'src/app/helpers/mobx-to-observable';
import { Todo } from '../../model/todo-item';
import { TodosFilters, TodosFilterStoreService } from '../../services/todos-filter-store.service';
import { TodosStoreService } from '../../services/todos-store.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit, OnDestroy {
  todos: Observable<Todo[]>;
  protected dispose: Subscription;

  constructor(private todosStore: TodosStoreService,
              private todosFilteredStore: TodosFilterStoreService,
              private cd: ChangeDetectorRef) {}

  public changeTodoView(filter: TodosFilters) {
    this.todosFilteredStore.changeTo(filter);
    this.updateTodoSource();
  }

  public isViewActive(view) {
    return <TodosFilters>view === this.todosFilteredStore.currentFilter;
  }

  public currentFilter() {
    return this.todosFilteredStore.currentFilter;
  }

  public updateList() {
    this.updateTodoSource();
  }

  ngOnDestroy(): void {
    if (this.dispose) {
      this.dispose.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.dispose = this.todosStore.stateChange.subscribe((change) => {
      if (change) {
        this.updateTodoSource();
      }
    });
  }

  private updateTodoSource() {
    this.todos = toRxJsObservable(() => this.todosStore.retrieveByFilter);
  }
}
