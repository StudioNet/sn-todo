import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';
import { TodosFilterStoreService } from './services/todos-filter-store.service';
import { TodosStoreService } from './services/todos-store.service';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
  declarations: [
    TodoListPageComponent,
    TodoItemsComponent,
    TodoItemComponent
  ],
  providers: [
    TodosFilterStoreService,
    TodosStoreService
  ],
})
export class TodosTestModule {}
