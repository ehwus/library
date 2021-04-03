let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(new Book(book.title, book.author));
}

const bookList = document.getElementById('books');
