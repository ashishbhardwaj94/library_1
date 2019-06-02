import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';

import { AdminBooksComponent } from './admin-books.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchPipe } from 'src/app/pipes/search-filter';
import { SortByPipe } from 'src/app/pipes/sort-by';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminService } from '../admin.service';
import { of } from 'rxjs/observable/of';

describe('AdminBooksComponent', () => {
  let component: AdminBooksComponent;
  let fixture: ComponentFixture<AdminBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ AdminBooksComponent ,SearchPipe,SortByPipe],
      providers:[FlashMessagesService],
      schemas: [
        NO_ERRORS_SCHEMA
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call fetchGoogleBook() method', () => {
    spyOn(component, 'search'); 
    fixture.detectChanges(); 
    expect(component.search).toHaveBeenCalled();
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
