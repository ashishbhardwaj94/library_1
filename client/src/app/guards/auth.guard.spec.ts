import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
  ],
  providers:[AuthGuard]
  }));

  it('should be created', () => {
    const service: AuthGuard = TestBed.get(AuthGuard);
    expect(service).toBeTruthy();
  });
});
