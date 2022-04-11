import React, {Component} from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Components/Main'
import Search from './Components/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  render() {
    return (
      <BrowserRouter>
          <div className='App'>
            < Routes>
             <Route exact path="/" element={<Main />} />
             <Route path="/search" element={<Search />} />

          









           </Routes>
          </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
