import { book, formatBook } from "./bookModule.js";

console.log(book.title)
console.log(book.author)
console.log(book.year)
console.log(book.getBookLabel());
console.log(formatBook(book, "Available"));