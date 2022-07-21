import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Books.module.css';

import Book from './Book';
import InputBook from './InputBook';

function Books() {
  const booklist = useSelector((state) => state.books);
  return (
    <>
      <h2 className={styles.title}>List of Books</h2>
      <div className={styles.booklist}>
        {booklist.map((elem) => {
          const { id, title, author } = elem;
          return <Book key={id} id={id} title={title} author={author} />;
        })}
      </div>
      <InputBook />
    </>
  );
}
export default Books;
