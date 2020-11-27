import { Component, DebugElement, DebugNode, Predicate, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class Sut<T> {
  constructor(public currentComponent, public fixture: ComponentFixture<Component>) {}

  isComponentCreated() {
    return <T>this.currentComponent;
  }

  detectChanges() {
    this.fixture.detectChanges();
  }

  obtainElement(selector: Predicate<DebugElement>, rootNode: DebugElement = null) {
      if (rootNode == null) {
        rootNode = this.fixture.debugElement;
      }

      return rootNode.query(selector);
  }

  obtainElements(selector: Predicate<DebugElement>, rootNode: DebugElement = null) {
    if (rootNode == null) {
      rootNode = this.fixture.debugElement;
    }
    return rootNode.queryAll(selector);
  }

  obtainDirective<T extends Type<any>>(dirv: T, rootNode: DebugElement = null) {
    if (rootNode == null) {
        rootNode = this.fixture.debugElement;
    }
    const elementDrv = this.obtainElement(By.directive(dirv));
    return elementDrv.injector.get(dirv) as T;
  }
}

export function createSut<T>(componentType: Type<T>): Sut<T> {
  let fixture: ComponentFixture<T> = TestBed.createComponent<T>(componentType);
  fixture.detectChanges();
  return new Sut<T>(fixture.componentInstance, fixture);
}
