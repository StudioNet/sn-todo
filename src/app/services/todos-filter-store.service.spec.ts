import { TestBed } from '@angular/core/testing';

import { TodosFilterStoreService } from './todos-filter-store.service';

describe('TodosFilterStoreService', () => {
  let service: TodosFilterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosFilterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
