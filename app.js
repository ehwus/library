let myLibrary = [];
const books = document.getElementById('books');

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.read = false;
}

function addBookToLibrary() {
  const title = document.getElementById('newBookTitle').value;
  const author = document.getElementById('newBookAuthor').value;

  myLibrary.push(new Book(title, author));
  localStorage.setItem('library', JSON.stringify(myLibrary));
  displayAllBooks();
}

function removeBookFromLibrary(id) {
  myLibrary.splice(id, 1);
  localStorage.setItem('library', JSON.stringify(myLibrary));
  displayAllBooks();
}

function displayAllBooks() {
  books.innerHTML = '';
  myLibrary.forEach((book, index) => {
    let newBook = createBookHTMLElement(book, index);
    newBook.appendChild(createReadButton(book, index));
    newBook.appendChild(createDeleteButton(index));
    books.appendChild(newBook);
  });

  if (myLibrary.length < 1) {
    let tempMessage = document.createElement('LI');
    tempMessage.innerHTML = 'No books to display yet!';
    books.appendChild(tempMessage);
  }
}

function toggleFormVisibility() {
  const form = document.getElementById('newBookForm');

  if (form.style.display === '') {
    form.style.display = 'block';
  } else {
    form.style.display = '';
  }
}

const createBookHTMLElement = (book, index) => {
  let bookHTML = document.createElement('LI');
  bookHTML.id = index;
  bookHTML.innerHTML = `${book.title} - ${book.author}`;
  return bookHTML;
};

const createDeleteButton = (index) => {
  let button = document.createElement('i');
  button.className = 'fas fa-trash';
  button.addEventListener('click', () => {
    removeBookFromLibrary(index);
  });
  return button;
};

const createReadButton = (book, index) => {
  let button = document.createElement('i');
  button.className = book.read ? 'far fa-check-square' : 'far fa-times-circle';
  button.addEventListener('click', function () {
    myLibrary[index].read = !myLibrary[index].read;
    displayAllBooks();
  });
  return button;
};

// MAIN
if (localStorage.library) {
  myLibrary = JSON.parse(localStorage.library);
}

displayAllBooks();
