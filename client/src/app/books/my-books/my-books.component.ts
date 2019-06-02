import { Component, OnInit } from '@angular/core';
import { IBook } from '../../model/books';
import { BookService } from '../book.service';
import { IIssue } from 'src/app/model/issue';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  pageTitle = 'My Books';
  errorMessage = '';
  sortByKey: string='_id';
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  filteredBooks: IBook[]=[];
  books: IBook[] =[];

  constructor(private bookService:BookService) {

  }

  performFilter(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book: IBook) =>
      book.topic.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }   

         
  ngOnInit() {
    this.getMyBooks();
  }

  getMyBooks(){
    let userId=JSON.parse(localStorage.getItem('user'));
    this.bookService.getMyBooksList(userId.id).subscribe((res)=>{
      console.log(res);
      this.books=res as IBook[];
      this.filteredBooks=this.books;
    });
  }

  onReturn(book:IBook){
    let userId=JSON.parse(localStorage.getItem('user'));
    let issue:IIssue={
      user_id:userId.id,
      firstName:userId.firstName,
      email:userId.email,
      book_id:book._id,
      bookTitle:book.bookTitle
    }
    if(confirm('Are you sure to return this book ?')==true){ 
      this.bookService.returnMyBook(issue).subscribe((res)=>{
        this.getMyBooks();
      });
    }
  }

}
