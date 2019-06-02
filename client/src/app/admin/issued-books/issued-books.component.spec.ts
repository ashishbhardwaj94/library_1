import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBooksComponent } from './issued-books.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search-filter';
import { SortByPipe } from 'src/app/pipes/sort-by';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('IssuedBooksComponent', () => {
  let component: IssuedBooksComponent;
  let fixture: ComponentFixture<IssuedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedBooksComponent ,SearchPipe,SortByPipe],
      imports:[FormsModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Pipe: SortByPipe', () => {
  it('create an instance', () => {
    let pipe = new SortByPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Pipe: SearchPipe', () => {
  it('create an instance', () => {
    let pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
});
