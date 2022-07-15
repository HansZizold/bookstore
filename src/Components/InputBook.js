import React from 'react';

function InputBook() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Enter title" />
        <input type="text" placeholder="Enter author" />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
}
export default InputBook;
