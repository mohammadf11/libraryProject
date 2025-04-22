import { BookStatus } from "../models/Book";
import { Library } from "../models/Library";

// Service class to  manage library operation
export class LibraryService {
  private library: Library;
  constructor(library: Library) {
    this.library = library;
  }

  /*
   * Borrow a book for a user
   * @param userId - the user's ID
   * @param bookId - the book's ID
   */
  borrowBokk(userId: string, bookId: string) {
    const user = this.library.findUserById(userId);
    const book = this.library.findBookById(bookId);

    if (!user) return `User with ID ${userId} not found.`;
    if (!book) return `Book with ID ${bookId} not found.`;
    if (book.status == BookStatus.BORROWED)
      return `Book "${book.title}" is already borrowed.`;

    user.borrowedBook(bookId);
    book.borrow();
    return `Book "${book.title}" has been borrowed by ${user.name}.`;
  }

  /**
   * Return a borrowed book
   * @param userId - the user's ID
   * @param bookId - the book's ID
   */
  returnBook(userId: string, bookId: string) {
    const user = this.library.findUserById(userId);
    const book = this.library.findBookById(bookId);
    if (!user) return `User with ID ${userId} not found.`;
    if (!book) return `Book with ID ${bookId} not found.`;
    if (!user.borrowedBooks.includes(bookId))
      return `${user.name} has not borrowed this book.`;

    user.returnBook(bookId);
    book.return();
    return `Book "${book.title}" has been returned by ${user.name}.`;
  }

  /**
   * Get a list of all borrowed books
   */
  getBorrowedBooks(): string[] {
    return this.library.books.filter(book => book.status === BookStatus.BORROWED).map(book => book.title)
  }
}
