import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from 'src/app/model/todo-item';

import { TodoItemComponent } from './todo-item.component';

const getTodo = () => {
  return new Todo( { title: 'New todo item' } );
}

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = getTodo();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the title should be <New todo item>', () => {
      expect(component.todo.title).toEqual('New todo item');
  });
});
