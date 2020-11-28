import { Component } from '@angular/core';
import { TodosStoreService } from './modules/todo/services/todos-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoItemTitle: string;
  dispose: any;
  private readonly EMPTY_STRING = '';

  constructor(private todosStore: TodosStoreService) {}

  addTodoItem() {
    this.todosStore.addNewTodoItem( { title: this.todoItemTitle } );
    this.todoItemTitle = this.EMPTY_STRING;
  }
}
