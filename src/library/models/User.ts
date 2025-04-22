import { IBook } from "./Book";

// Interface defining the structure of a user
export interface IUser {
  id: string;
  name: string;
  borrowedBooks: string[]; //book Ids
}

// User class Implementing the IUser interface
export class User implements IUser {
  public readonly id;
  public name: string;
  public borrowedBooks: string[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = [];
  }

  // Adds a book ID to the list of borrowed books
  borrowedBook(bookId: string): void {
    this.borrowedBooks.push(bookId);
  }
  // Remove a book ID to the list of borrowed books 
  returnBook(bookId:string):void{
    this.borrowedBooks = this.borrowedBooks.filter(id => id !== bookId);
  }
}
