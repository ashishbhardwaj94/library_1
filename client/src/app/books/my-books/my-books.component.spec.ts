import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksComponent } from './my-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search-filter';
import { SortByPipe } from 'src/app/pipes/sort-by';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlashMessagesService } from 'angular2-flash-messages';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ MyBooksComponent,SearchPipe,SortByPipe],
      providers:[FlashMessagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksComponent);
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