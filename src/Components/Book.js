import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

import styles from './Book.module.css';

function Book(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button
        type="button"
        className={styles.removebutton}
        onClick={handleClick}
      >
        Remove Book
      </button>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Book;
