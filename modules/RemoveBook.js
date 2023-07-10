/* eslint-disable */
import { getBooks, storeBooks } from './LocalStorage.js';

export const removeBook = (title, author) => {
  if (getBooks) {
    const myBooks = getBooks;
    myBooks.forEach((item) => {
      if (item.title === title && item.author === author) {
        const index = myBooks.indexOf(item);

        if (index > -1) {
          myBooks.splice(index, 1);
          storeBooks(myBooks);
        }
      }
    });
  }
};