/* eslint-disable */
import { removeBook } from './RemoveBook.js';
import { getBooks } from './LocalStorage.js';

export const display = () => {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  if (getBooks) {
    getBooks.forEach((book, index) => {
      const bookListItem = document.createElement('li');

      if (typeof book.displayInfo === 'function') {
        bookListItem.textContent = book;
      } else {
        bookListItem.innerHTML = `"<span>${book.title}</span>" by <span>${book.author}</span>`;
      }

      bookListItem.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#fff';
      bookListItem.style.padding = '1%';

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', (e) => {
        const book = e.target.parentElement;
        const title = book.children[0].innerHTML;
        const author = book.children[1].innerHTML;
        removeBook(title, author);
        display();
      });

      bookListItem.appendChild(removeBtn);
      bookList.appendChild(bookListItem);
    });
  }
};