import { async, ComponentFixture, TestBed ,fakeAsync} from '@angular/core/testing';
import { Location } from "@angular/common";
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from "@angular/router";
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from '../admin/admin.component';
import { BookListComponent } from '../books/book-list/book-list.component';
import { WelcomeComponent } from '../home/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/pipes/search-filter';
import { SortByPipe } from 'src/app/pipes/sort-by';
import {routes} from '../app.module';
import { AdminBooksComponent } from '../admin/admin-books/admin-books.component';
import { ProfileComponent } from '../profile/profile.component';
import { BookDetailComponent } from '../books/book-detail/book-detail.component';
import { MyBooksComponent } from '../books/my-books/my-books.component';
import { IssuedBooksComponent } from '../admin/issued-books/issued-books.component';

describe('NavbarComponent', () => {
  let location: Location;
  let router: Router;
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routes),HttpClientModule,FormsModule,ReactiveFormsModule],
      declarations: [ NavbarComponent ,AdminBooksComponent,LoginComponent,UserComponent,AdminComponent,
        BookListComponent,WelcomeComponent,ProfileComponent,BookDetailComponent,MyBooksComponent,IssuedBooksComponent,SearchPipe,SortByPipe],
      providers:[FlashMessagesService]
    })
    .compileComponents().then(()=>{
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      fixture = TestBed.createComponent(NavbarComponent);
      router.initialNavigation();
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /welcome', fakeAsync(() => {
    router.navigate(["/welcome"]).then(() => {
      expect(location.path()).toBe("/welcome");
    });
  }));

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
