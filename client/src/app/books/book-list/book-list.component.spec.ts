import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search-filter';
import { SortByPipe } from 'src/app/pipes/sort-by';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from '../book.service';
import { BookServiceMock } from '../BookServiceMock';



describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,RouterTestingModule,HttpClientModule],
      declarations: [ BookListComponent ,SearchPipe,SortByPipe],
      providers:[FlashMessagesService,{provide:BookService,useClass:BookServiceMock}]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(BookListComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should have one book', async(() => {
    expect(component.books.length).toEqual(0);
  }));

});

describe('Pipe: SearchPipe', () => {
  it('create an instance', () => {
    let pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Pipe: SortByPipe', () => {
  it('create an instance', () => {
    let pipe = new SortByPipe();
    expect(pipe).toBeTruthy();
  });
});

