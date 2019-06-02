import { IBook } from '../model/books';

export class BookServiceMock{

    book1:IBook={
        _id:'12',
        bookTitle:'python',
        topic:'python',
        author:'sandeep',
        cost:400,
        description:'new book',
        rating:4,
        count:5,
        issued:true
    };
}