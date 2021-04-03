let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
  displayAllBooks();
}

function displayAllBooks() {
  const books = document.getElementById('books');
  books.innerHTML = '';

  myLibrary.forEach((book) => {
    let bookHTML = document.createElement('LI');
    bookHTML.innerHTML = `${book.title} - ${book.author}`;
    books.appendChild(bookHTML);
  });
}

function toggleFormVisibility() {
  const form = document.getElementById('newBookForm');

  if (form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = '';
  }
}

displayAllBooks();
