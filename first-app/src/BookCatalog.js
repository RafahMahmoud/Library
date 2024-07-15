import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fire() {
  const [books, setBooks] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newISBN, setNewISBN] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  // Fetch data from Firebase Realtime Database
  const fetchData = async () => {
    setLoading(true); // Set loading state to true during fetch
    try {
      const response = await axios.get('https://rafah-library-default-rtdb.europe-west1.firebasedatabase.app/books.json');
      if (response.data) {
        const filteredBooks = Object.keys(response.data)
          .filter(key => !response.data[key].isDeleted)
          .reduce((obj, key) => {
            obj[key] = response.data[key];
            return obj;
          }, {});
        setBooks(filteredBooks);
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading state back to false after fetch
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add new book to Firebase
  const addData = async () => {
    try {
      await axios.post('https://rafah-library-default-rtdb.europe-west1.firebasedatabase.app/books.json', {
        author: 'Author Name',
        isbn: 'isbn number',
        title: 'Book Title',
        isDeleted: false
      });
      fetchData();  // Fetch data again to update the list with the newly added book
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
//   addData();

  // Soft delete a book from Firebase
  const softDeleteBook = async (bookId) => {
    try {
      await axios.patch(`https://rafah-library-default-rtdb.europe-west1.firebasedatabase.app/books/${bookId}.json`, { isDeleted: true });
      fetchData();  // Fetch data again to update the list after soft deleting a book
      console.log(`Book ${bookId} marked as deleted`);
    } catch (error) {
      console.error('Error marking book as deleted:', error);
    }
  };

  // Set editing state for a book
  const editBook = (bookId, title, author, isbn) => {
    setEditingBook(bookId);
    setNewTitle(title);
    setNewAuthor(author);
    setNewISBN(isbn);
  };

  // Save edited book details to Firebase
  const saveBook = async () => {
    try {
      await axios.patch(`https://rafah-library-default-rtdb.europe-west1.firebasedatabase.app/books/${editingBook}.json`, {
        title: newTitle,
        author: newAuthor,
        isbn: newISBN
      });
      setEditingBook(null);
      setNewTitle('');
      setNewAuthor('');
      setNewISBN('');
      fetchData();  // Fetch data again to update the list with the edited book
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="container mx-auto px-28 text-center">
      <h1 className="text-3xl font-bold my-8 ">Enjoy Reading</h1>
      {loading ? (
        <p className="text-center text-lg">Loading data...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books && Object.keys(books).map((key) => (
            <div key={key} className="bg-white rounded-lg shadow-md p-4">
              {editingBook === key ? (
                <div>
                  <input
                    className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <input
                    className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Author"
                  />
                  <input
                    className="block mb-2 p-2 border border-gray-300 rounded w-full"
                    value={newISBN}
                    onChange={(e) => setNewISBN(e.target.value)}
                    placeholder="ISBN"
                  />
                  <button
                    className="mt-2 px-4 py-2 bg-lBlue text-white rounded hover:bg-blue-700"
                    onClick={saveBook}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-bold mb-2">{books[key].title}</h2>
                  <p className="text-gray-700">Author: {books[key].author}</p>
                  <p className="text-gray-700">ISBN: {books[key].isbn}</p>
                  <div className="mt-2">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2 mb-2"
                      onClick={() => editBook(key, books[key].title, books[key].author, books[key].isbn)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                      onClick={() => softDeleteBook(key)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        className="my-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={addData}
      >
        Add New Book
      </button>
    </div>
  );
}
