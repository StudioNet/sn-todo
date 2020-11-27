import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

export function setupTestModule<T>(module: Type<T>, providers: any[] = []) {
  const testModule = TestBed.configureTestingModule({
    imports: [module],
    providers: providers
  });

  testModule.compileComponents();
}
