import React, {Component} from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Components/Main'
import Search from './Components/Search'

class BooksApp extends Component {
  state = {
   books : [] ,
   searchBook : '',
   allBooks : [],
   searchShelf : false
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then(res => { this.setState({ books : res})
    })
  }

  componentDidMount(){
   this.getBooks()
  }

  newShelf = async (book, shelf)  =>{ 
    await BooksAPI.update(book, shelf); 
    this.getBooks()
    }

 
    searchInput = async (e) =>{
      try{
            await this.setState({
            searchBook:e.target.value
            });
              const result = this.state.searchBook 
              if (result.trim().length>0){
                 BooksAPI.search(result).then((res) => {
                    if(res && res.error){
                    this.setState ({
                      allBooks : "no books for this input",
                      searchShelf: false
                     }) 
                    }else if(!res ){
                      this.setState ({
                        allBooks : "no books for this input",
                        searchShelf: false
                       })         
                    }else {
                      const serchedBooks = this.state.books
                      this.setState({
                        allBooks: res.filter((searchedBooksShelf) => {
                        serchedBooks.map((book) => {
                        if (searchedBooksShelf.id === book.id)
                           searchedBooksShelf.shelf = book.shelf
                        })
                        return searchedBooksShelf
                        }),
                      searchShelf: true
                      })
                    }
                  })
              }else{
                this.setState({
                  allBooks : [],
                  searchBook:"",
              })          
              }
      }catch(error){
       console.log(error)   
      } 
    } 

  render() {
    return (
      <BrowserRouter>
          <div className='App'>
            < Routes>
              <Route exact="true"  path="/" element={<Main books={this.state.books} newShelf={this.newShelf}/>} />
              <Route path="/search" element={<Search  searchBook={this.state.searchBook} searchInput={this.searchInput} allBooks={this.state.allBooks} newShelf={this.newShelf} searchShelf={this.state.searchShelf}/>} />
            </Routes>
          </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
