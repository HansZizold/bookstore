import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();

  const handleSubmit = (elem) => {
    elem.preventDefault();
    const title = elem.target[0].value;
    const author = elem.target[1].value;
    if (title && author) {
      const book = { id: new Date().getTime(), title, author };
      dispatch(addBook(book));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Enter title" />
        <input type="text" id="author" placeholder="Enter author" />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
}
export default InputBook;
