import { TestBed } from '@angular/core/testing';
import { TodosTestModule } from '../todo.module.spec';

import { TodosStoreService } from './todos-store.service';

describe('TodosStoreService', () => {
  let service: TodosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule(new TodosTestModule());
    service = TestBed.inject(TodosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
