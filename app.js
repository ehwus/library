let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(new Book(book.title, book.author));
}

function toggleFormVisibility() {
  let form = document.getElementById('newBookForm');
  if (form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = '';
  }
}

const bookList = document.getElementById('books');
