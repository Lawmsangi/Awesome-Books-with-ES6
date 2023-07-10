export const showBooksSec = document.getElementById('book-list-section');
export const addBooksSec = document.getElementById('add-book-section');
export const contactSec = document.getElementById('contact-section');
export const list = document.getElementById('show-list');
// eslint-disable-next-line import/prefer-default-export
export const add = document.getElementById('show-add');
export const contact = document.getElementById('show-contact');

export const showAllBooks = () => {
  showBooksSec.style.display = 'flex';
  addBooksSec.style.display = 'none';
  contactSec.style.display = 'none';
};
export const showAddBooks = () => {
  addBooksSec.style.display = 'flex';
  showBooksSec.style.display = 'none';
  contactSec.style.display = 'none';
};
export const showContact = () => {
  contactSec.style.display = 'flex';
  addBooksSec.style.display = 'none';
  showBooksSec.style.display = 'none';
};