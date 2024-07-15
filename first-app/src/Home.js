import './Home.css';
import React, { useState } from 'react';
function Home() {
    // Define initial state with an array of books
    const user = JSON.parse(localStorage.getItem('user'))

    const [books, setBooks] = useState([
      {
        id: 1,
        title: "مقدمة ابن خلدون",
        author: "ابن خلدون",
        isbn: "1289499030"
      },
      {
        id: 2,
        title: "الحاوي في الطب",
        author: "ابو بكر الرازي",
        isbn: "893847239479"
      },
      {
        id: 3,
        title: "الجبر والمقابلة",
        author: "الخوارزمي",
        isbn: "94837293847"
      },
      {
        id: 4,
        title: "رحلة ابن فضلان",
        author: "ابن فضلان",
        isbn: "238947238947"
      },
      {
        id: 5,
        title: "المغني",
        author: "ابن حزم",
        isbn: "329847239874"
      },
      {
        id: 6,
        title: "كتاب الخصائص",
        author: "الخوارزمي",
        isbn: "839274892374"
      }
    ]);
  
    return (
      <div>
         {user?<p className='text-center text-xxlg font-bold my-24'> Welcome {user.name}</p>:<></>}
         {user?
      <div className="books-list grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-28 mb-20">
        {books.map((book) => (
          <div className="book bg-white rounded-lg shadow-md p-4" key={book.id}>
            <p className="text-xl font-bold mb-2">Title: {book.title}</p>
            <p className="text-gray-700">ID: {book.id}</p>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>: <div className="books-list grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-28 mb-36 mt-40">
        {books.map((book) => (
          <div className="book bg-white rounded-lg shadow-md p-4 text-center" key={book.id}>
            <p className="text-xl font-bold mb-2">Title: {book.title}</p>
            <p className="text-gray-700">ID: {book.id}</p>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>}
      </div>
    );
  }
  export default Home;