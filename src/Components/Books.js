import React from 'react';
import styles from './Books.module.css';
import Book from './Book';
import InputBook from './InputBook';

function Books() {
  const booklist = {
    id: 1,
    title: 'The Book of Levi',
    author: 'John Conroe',
  };
  return (
    <>
      <h2 className={styles.title}>List of Books</h2>
      <div className={styles.booklist}>
        <Book title={booklist.title} author={booklist.author} />
      </div>
      <InputBook />
      <button type="button" className={styles.removebutton}>
        Remove Book
      </button>
    </>
  );
}
export default Books;
