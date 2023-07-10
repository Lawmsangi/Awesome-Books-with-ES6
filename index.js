import Book from './modules/ClassBook.js';
import { getBooks, storeBooks } from './modules/LocalStorage.js';
import display from './modules/DisplayBook.js';
import {
  list, add, contact, showAddBooks, showAllBooks, showContact,
} from './modules/ShowNavigation.js';
import displayTime from './modules/Date.js';

let myBooks = [];

window.addEventListener('DOMContentLoaded', () => {
  if (getBooks) {
    myBooks = getBooks;
  }
  displayTime();
  display();
}, false);

const formDiv = document.querySelector('.form-div');

formDiv.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const book = new Book(title.value, author.value);
  myBooks.push(book);
  storeBooks(myBooks);
  title.value = '';
  author.value = '';
  display();
});

list.addEventListener('click', showAllBooks);
add.addEventListener('click', showAddBooks);
contact.addEventListener('click', showContact);
