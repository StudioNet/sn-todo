import { TestBed } from '@angular/core/testing';
import { TodosTestModule } from '../todo.module.spec';

import { TodosFilterStoreService } from './todos-filter-store.service';

describe('TodosFilterStoreService', () => {
  let service: TodosFilterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule(new TodosTestModule());
    service = TestBed.inject(TodosFilterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
