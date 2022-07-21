import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { checkcategories } from '../redux/categories/categories';

import styles from './Categories.module.css';

function Categories() {
  const categorylist = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    const Category = 'Under Construction ...';
    dispatch(checkcategories(Category));
  };

  return (
    <>
      <h2 className={styles.categories}>Categories</h2>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
      >
        Check Status
      </button>
      <h4>{categorylist}</h4>
    </>
  );
}

export default Categories;
