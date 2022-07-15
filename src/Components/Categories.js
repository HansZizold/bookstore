import React from 'react';
import styles from './Categories.module.css';

function Categories() {
  return (
    <>
      <h2 className={styles.categories}>Categories</h2>
      <button type="button" className={styles.button}>
        Check Status
      </button>
    </>
  );
}
export default Categories;
