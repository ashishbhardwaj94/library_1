import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from '../guards/auth.guard';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,RouterTestingModule],
      providers:[AuthGuard]
  }));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
