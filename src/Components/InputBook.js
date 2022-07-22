import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();

  const handleSubmit = (elem) => {
    elem.preventDefault();
    const title = elem.target[0].value;
    const author = elem.target[1].value;
    const category = elem.target[2].value;
    if (title && author && category) {
      const book = {
        item_id: new Date().getTime().toString(), title, author, category,
      };
      dispatch(addBook(book));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('category').value = '';
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Enter Title" />
        <input type="text" id="author" placeholder="Enter Author" />
        <input type="text" id="category" placeholder="Enter Category" />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
}
export default InputBook;
