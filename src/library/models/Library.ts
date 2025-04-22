import { Book } from "./Book";
import { User } from "./User";

export class Library {
  public books: Book[];
  public users: User[];

  constructor() {
    this.books = [];
    this.users = [];
  }

  // Adds a new book to the library
  addBook(book: Book) {
    this.books.push(book);
  }

  // Adds a new user to the library
  addUser(user: User) {
    this.users.push(user);
  }

  // Finds a book by its ID
  findBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  // Finds a user by their ID
  findUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
