import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTestModule } from 'tests/setup-test-module';
import { createSut, Sut } from 'tests/sut';
import { TodosTestModule } from '../../todo.module.spec';

import { TodoItemsComponent } from './todo-items.component';

describe('TodoItemsComponent', () => {
  let component: TodoItemsComponent;
  let sut: Sut<TodoItemsComponent>;

  beforeEach(async () => {
    await setupTestModule(TodosTestModule);
  });

  beforeEach(() => {
    sut = createSut<TodoItemsComponent>(TodoItemsComponent);
    component = sut.currentComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
