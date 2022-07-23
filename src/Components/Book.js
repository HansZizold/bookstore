import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

import styles from './Book.module.css';

function Book(props) {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.book}>
      <div className={styles.sectionone}>
        <div className={styles.bookdata}>
          <p className={styles.category}>{category}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <div>
          <button
            type="button"
            className={styles.buttonbook}
          >
            Comments
          </button>
          <button
            type="button"
            className={styles.buttonbook}
            onClick={handleClick}
          >
            Remove Book
          </button>
          <button
            type="button"
            className={styles.buttonbook}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={styles.sectiontwo}>
        <div className={styles.circle} />
        <div className={styles.completed}>
          <div className={styles.percentage}>75%</div>
          <div className={styles.text}>Completed</div>
        </div>
      </div>
      <div className={styles.sectionthree}>
        <p className={styles.current}>CURRENT CHAPTER</p>
        <p className={styles.intro}>Introduction</p>
        <button
          type="button"
          className={styles.updatebutton}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
