import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IIssue } from '../model/issue';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 readonly baseURL='http://localhost:3000/books';
 readonly issueURL='http://localhost:3000/books/issue';
  constructor(private http: HttpClient) { }


  getBooksList(){
    return this.http.get(this.baseURL);
  }

  getBook(_id:string){
    return this.http.get(this.baseURL+`/${_id}`);
  }

  issueBook(issue:IIssue){
    return this.http.post(this.issueURL,issue).pipe(map((res:any)=> res));
  }

  getMyBooksList(_id:string){
    return this.http.get(this.baseURL+'/mybooks'+`/${_id}`);
  }

  returnMyBook(issue:IIssue){
    return this.http.post(this.baseURL+'/return',issue);
  }
}
