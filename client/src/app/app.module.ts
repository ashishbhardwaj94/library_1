import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }                from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookService } from './books/book.service';
import { WelcomeComponent } from './home/welcome.component';
import { SortByPipe } from './pipes/sort-by';
import { SearchPipe } from './pipes/search-filter';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdminBooksComponent } from './admin/admin-books/admin-books.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from './guards/auth.guard';
import { MyBooksComponent } from './books/my-books/my-books.component';
import { Routes } from "@angular/router";
import { IssuedBooksComponent } from './admin/issued-books/issued-books.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'adminBooks', component: AdminBooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserComponent },
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  { path: 'books', component: BookListComponent },
  { path: 'mybooks', component: MyBooksComponent },
  { path: 'issuedBooks', component: IssuedBooksComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'book/:id',component:BookDetailComponent },       
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    WelcomeComponent,
    SearchPipe,
    SortByPipe,
    AdminComponent,
    UserComponent,
    LoginComponent,
    AdminBooksComponent,
    NavbarComponent,
    ProfileComponent,
    MyBooksComponent,
    IssuedBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
