import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

function Book(props) {
  const { title, author } = props;
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" className={styles.removebutton}>
        Remove Book
      </button>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
