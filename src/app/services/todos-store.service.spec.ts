import { TestBed } from '@angular/core/testing';

import { TodosStoreService } from './todos-store.service';

describe('TodosStoreService', () => {
  let service: TodosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
