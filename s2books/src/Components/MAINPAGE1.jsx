import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';
import FORM from './MAINPAGE1';

function All() {
  
  const [booksList, setBooksList] = useState([]);
  const [searchInfo, setSearchInfo] = useState('');

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Authorization': 'authorization'
      }
    })
      .then(res => {
        const bookData = res.data
        console.log(bookData)
        setBooksList(bookData.books)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  const booksMaped = booksList.filter(book =>
    book.title.toLowerCase().includes(searchInfo.toLowerCase())
  );

  return (
    <>
      <nav>
        <h1 id ='header'>Kalvium Books</h1>
        <input
          type = "search"
          value = {searchInfo}
          onChange = {(e) => setSearchInfo(e.target.value)}
          className = 'searchbox'
        />
        <Link to = "/form"><button id = 'register'>Register</button></Link>
      </nav>
      <div className = 'book1'>
        {booksMaped.map((book) => (
          <div key = {book.id} className = 'book2'>
            <img src = {book.imageLinks.smallThumbnail} alt = "Book_Image_Title" />
            <h3 className = 'book3'>{book.title}</h3>
            <div className = 'book4'>
              <p>{book.averageRating || 4}⭐</p>
              <p>Free</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default All;