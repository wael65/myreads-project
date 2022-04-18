import React from 'react'
import Book from './Book'

const SearchBooks = ({ searchShelf,allBooks,aBook, newShelf}) => {

    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title" style={{paddingTop: 45}}>Search</h2>
              <div className="bookshelf-books">
                <ol className="books-grid" style={{ fontSize: 30, justifyContent: 'center', fontFamily: 'ans-serif', paddingTop:40 }}>
                 {
                          searchShelf ? ( allBooks.map((aBook)=>(
                            <Book key={aBook.id}  aBook={aBook} newShelf={newShelf} />
                          )))
                                      :(allBooks)
                 }
                </ol>
              </div>
            </div>  
    )}

    export default SearchBooks;