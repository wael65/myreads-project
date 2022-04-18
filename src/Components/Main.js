import React from 'react';
import { NavLink } from 'react-router-dom'; 
import Shelf from './Shelf'

const Main = ({books, newShelf}) => {
   
      return (
         <div>
            <div className="open-search">
              <NavLink className="add" to="/search">Search</NavLink>
            </div>
             <div className="list-books">
               <div className="list-books-title">
                  <h1>MyReads</h1>
               </div>
             </div>
               < Shelf reading = 'Currently Reading' books={books}  readingState = 'currentlyReading' newShelf={newShelf}/>
               < Shelf reading = 'Want to Read'  books={books}  readingState = 'wantToRead' newShelf={newShelf}/>
               < Shelf reading = ' Read'  books={books}  readingState = 'read' newShelf={newShelf}/> 
          </div> 
      )}
 

export default Main;
