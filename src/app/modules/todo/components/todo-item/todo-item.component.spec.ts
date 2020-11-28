import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTestModule } from 'tests/setup-test-module';
import { createSut, Sut } from 'tests/sut';
import { Todo } from '../../model/todo-item';
import { TodosTestModule } from '../../todo.module.spec';

import { TodoItemComponent } from './todo-item.component';

const getTodo = () => {
  return new Todo( { title: 'New todo item' } );
}

describe('TodoItemComponent', () => {
  let sut: Sut<TodoItemComponent>;
  let fixture: ComponentFixture<TodoItemComponent>;
  let component: TodoItemComponent;

  beforeEach(async () => {
    await setupTestModule(TodosTestModule);
  });

  beforeEach(() => {
    sut = createSut<TodoItemComponent>(TodoItemComponent, false);
    component = sut.currentComponent;
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });

  it('the title should be <New todo item>', () => {
    component.todo = getTodo();
    sut.detectChanges();
    expect(component.todo.title).toEqual('New todo item');
  });
});
