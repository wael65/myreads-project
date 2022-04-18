import React  from 'react';
import { NavLink } from 'react-router-dom'; 
import SearchBooks from './SearchBooks'

const Search = ({searchInput, allBooks, newShelf, searchShelf}) => {
          return (
         <div className="search-books">
            <div className="search-books-bar">
               <NavLink className="close-search"  to="/"></NavLink>
               <div className="search-books-input-wrapper">
                 <input type="text" placeholder="Search by title or author"  onChange={searchInput}/>
               </div>

            </div>
               <SearchBooks allBooks={allBooks} newShelf={newShelf} searchShelf={searchShelf}/>
            </div>
           
          );
       }
    
    
    export default Search;