import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

import styles from './InputBook.module.css';

function InputBook() {
  const dispatch = useDispatch();

  const handleSubmit = (elem) => {
    elem.preventDefault();
    const title = elem.target[0].value;
    const author = elem.target[1].value;
    const category = elem.target[2].value;
    if (title && author && category) {
      const book = {
        item_id: new Date().getTime().toString(), title, author, category,
      };
      dispatch(addBook(book));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('category').value = '';
    }
  };

  return (
    <div className={styles.inputmain}>
      <hr className={styles.line} />
      <h2>ADD NEW BOOK</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className={styles.title} id="title" placeholder="Book Title" />
        <input type="text" className={styles.title} id="author" placeholder="Book Author" />
        <input type="text" className={styles.category} id="category" placeholder="Category" />
        <input type="submit" className={styles.addbutton} value="Add Book" />
      </form>
    </div>
  );
}
export default InputBook;
