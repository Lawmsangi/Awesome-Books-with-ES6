export const storeBooks = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

const books = localStorage.getItem('books');
export const getBooks = JSON.parse(books);