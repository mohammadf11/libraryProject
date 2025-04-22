import { stat } from "fs";

// Represents the availablilty status of a book
export enum BookStatus {
  AVAILABLE = "available",
  BORROWED = "borrowed",
}

// interface defining the structure of a book
export interface IBook {
  id: string;
  title: string;
  author: string;
  year: number;
  status: BookStatus;
}

// Book class implementing the IBook interface
export class Book implements IBook {
  public readonly id: string;
  public title: string;
  public author: string;
  public year: number;
  public status: BookStatus;
  constructor(id: string, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = BookStatus.AVAILABLE;
  }
  // Marks as the book as borrowed
  borrow(): void {
    this.status = BookStatus.BORROWED;
  }

  // Marks the book as available
  return(): void {
    this.status = BookStatus.BORROWED;
  }
}
