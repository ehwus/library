let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.read = false;
}

function addBookToLibrary() {
  const title = document.getElementById('newBookTitle').value;
  const author = document.getElementById('newBookAuthor').value;

  myLibrary.push(new Book(title, author));
  displayAllBooks();
}

function removeBookFromLibrary(id) {
  myLibrary.splice(id, 1);
  displayAllBooks();
}

function displayAllBooks() {
  const books = document.getElementById('books');
  books.innerHTML = '';

  myLibrary.forEach((book, index) => {
    let bookHTML = document.createElement('LI');
    bookHTML.id = index;
    let readStatusString = book.read ? 'Read' : 'Unread';
    bookHTML.innerHTML = `${book.title} - ${book.author} (${readStatusString})`;
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
