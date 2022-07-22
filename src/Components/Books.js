import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Books.module.css';

import Book from './Book';
import InputBook from './InputBook';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const booklist = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      <h2 className={styles.title}>List of Books</h2>
      <div className={styles.booklist}>
        {booklist.map((elem) => {
          const {
            id, title, author, category,
          } = elem;
          return (
            <Book
              key={id}
              id={id}
              title={title}
              author={author}
              category={category}
            />
          );
        })}
      </div>
      <InputBook />
    </>
  );
};
export default Books;
