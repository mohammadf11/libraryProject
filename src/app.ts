import { Library } from "./library/models/Library";
import { Book, BookStatus } from "./library/models/Book";
import { User } from "./library/models/User";
import { LibraryService } from "./library/services/LibraryService";
import logger from "./library/utils/logger"; // Import logger

// Initialize a new library
const myLibrary = new Library();

// Create some books
const book1 = new Book("1", "The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("2", "1984", "George Orwell", 1949);
const book3 = new Book("3", "To Kill a Mockingbird", "Harper Lee", 1960);

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Create some users
const user1 = new User("1", "Alice");
const user2 = new User("2", "Bob");

// Add users to the library
myLibrary.addUser(user1);
myLibrary.addUser(user2);

// Initialize LibraryService
const libraryService = new LibraryService(myLibrary);

// Test borrowing and returning books
logger.info(libraryService.borrowBook("1", "1")); // Alice borrows The Great Gatsby
logger.info(libraryService.borrowBook("2", "2")); // Bob borrows 1984
logger.info(libraryService.returnBook("1", "1")); // Alice returns The Great Gatsby

// Show all borrowed books
logger.info("Currently borrowed books: " + libraryService.getBorrowedBooks());
