import React from 'react';

import styles from './Books.module.css';

import Book from './Book';
import InputBook from './InputBook';
import booklist from './Booklist';

function Books() {
  return (
    <>
      <h2 className={styles.title}>List of Books</h2>
      <div className={styles.booklist}>
        {booklist.map((elem) => {
          const { id, title, author } = elem;
          return <Book key={id} title={title} author={author} />;
        })}
      </div>
      <InputBook />
    </>
  );
}
export default Books;
