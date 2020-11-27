import { DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTestModule } from 'tests/setup-test-module';
import { createSut, Sut } from 'tests/sut';

import { TodoListPageComponent } from './todo-list-page.component';

import { NgModule } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { By } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [TodoListPageComponent, TodoItemsComponent, TodoItemComponent],
  providers: [],
})
export class TodoListPageTestModule {}

describe('TodoListPageComponent', () => {
  let sut: Sut<TodoListPageComponent>;
  let component: TodoListPageComponent;

  beforeEach(async () => {
    await setupTestModule(TodoListPageTestModule);
  });

  beforeEach(() => {
     sut = createSut<TodoListPageComponent>(TodoListPageComponent);
  });

  it('Should be created as expected', () => {
    expect(sut.isComponentCreated()).toBeTruthy();
  });

  it('The page has the three tabs', async () => {
      const navContent = sut.obtainElement(By.css('#todos-page'));
      const tabs = sut.obtainElements(By.css('.nav-link'), navContent);
      expect(tabs.length).toEqual(3);
  });

  it('The first loaded tab must be ALL', async () => {
    component = <TodoListPageComponent>sut.currentComponent;
    await expect(component.currentFilter()).toBeTruthy();
    await expect(component.currentFilter()).toBe('ALL');
  });

  it('Should switch to the ACTIVE TAB', async() => {
    component = <TodoListPageComponent>sut.currentComponent;
    component.changeTodoView('ACTIVE');
    sut.detectChanges();
    //Example: how we can access the framework directive on our component template [DOM]
    const switchDirv = sut.obtainDirective(NgSwitch);
    await expect(switchDirv['_ngSwitch']).toBe('ACTIVE');
  });

  it('Tab should be COMPLETED after click on it', async () => {
    component = <TodoListPageComponent>sut.currentComponent;
    component.changeTodoView('COMPLETED');
    sut.detectChanges();
    await sut.fixture.whenRenderingDone();
    const openedTab = sut.obtainElement(By.css('.tab-pane'));
    await expect(openedTab).toBeDefined();
    await expect(component.currentFilter()).toBe('COMPLETED');
  });

});
