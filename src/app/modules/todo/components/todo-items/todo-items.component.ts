import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemsComponent {
  @Input() todos: Todo[];
  @Output() onItemChanged = new EventEmitter();

  setItemDone(todo: Todo) {
    todo.setDone(!todo.done);
    this.onItemChanged.emit();
  }
}
