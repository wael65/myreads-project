import React from 'react';
import Book from './Book'

const Shelf = ({reading, books, readingState, newShelf}) => {
  
const shelfBooks = books.filter((book) => book.shelf === readingState)
   
  return (
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title" >{reading}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {shelfBooks.map ((book) => (
                       <Book key = {book.id} aBook={book} newShelf={newShelf}/>
                    ))}
                     
                    </ol>
                  </div>
                </div>
            </div>
             );
        }
    

export default Shelf;