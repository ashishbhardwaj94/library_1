import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IBook } from '../model/books';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedBook:IBook|{}={};
  bookData:any;
  private bookUrl = 'assets/books.json';
  readonly baseURL='http://localhost:3000/books';
  readonly issueBooksURL='http://localhost:3000/books/issuedBooks';
 
  constructor(private http: HttpClient) { }

  getBooksList(){
    return this.http.get(this.baseURL);
  }

  postBooks(book:IBook){
    console.log(book);
    return this.http.post(this.baseURL,book);
  }

  putBooks(book:IBook){
    console.log(book);
    return this.http.put(this.baseURL+`/${book._id}`,book);
  }

  deleteBook(_id:string){
    return this.http.delete(this.baseURL+`/${_id}`);
  }

  admin(username:string,password:string){
    if(username=='admin' && password=='admin')
    return true;
    else 
    return false;
  }

  getIssuedList(){
    console.log('issued books')
    return this.http.get(this.issueBooksURL);
  }

  fetchGoogleBook(bookname){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+bookname);
  } 
  
}
