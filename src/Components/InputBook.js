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

// import React, { useState } from 'react';
// import booklist from './Booklist';

// const InputBook = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [books, setBooks] = useState(booklist);

//   const handleSubmit = (elem) => {
//     elem.preventDefault();
//     if (title && author) {
//       const book = { id: new Date().getTime().toString(), title, author };
//       setBooks((books) => [...books, book]);
//       setTitle('');
//       setAuthor('');
//     } else {
//       console.log('empty values');
//     }
//     return books;
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(elem) => setTitle(elem.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter author"
//           value={author}
//           onChange={(elem) => setAuthor(elem.target.value)}
//         />
//         <input type="submit" value="Add Book" />
//       </form>
//     </>
//   );
// };
// export default InputBook;
