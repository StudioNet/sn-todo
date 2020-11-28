import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { TodosFilterStoreService } from './services/todos-filter-store.service';
import { TodosStoreService } from './services/todos-store.service';

@NgModule({
  declarations: [
    TodoListPageComponent,
    TodoItemsComponent,
    TodoItemComponent
  ],
  providers: [
    TodosFilterStoreService,
    TodosStoreService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListPageComponent,
    TodoItemsComponent,
    TodoItemComponent
  ]
})
export class TodoModule { }
