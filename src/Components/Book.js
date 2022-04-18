import React from 'react';

const Book = ({ aBook, newShelf}) => {

  const  handelChange = (e) => {newShelf(aBook, e.target.value)}
  
      return (
              <div>
                    <li>
                        <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: aBook.imageLinks ? `url(${aBook.imageLinks.smallThumbnail})`: "" }}></div>
                                <div className="book-shelf-changer">
                                  <select onChange={handelChange} value={aBook.shelf ? aBook.shelf : "none"}>
                                     <option value="move" disabled>Move to...</option>
                                     <option value="currentlyReading">Currently Reading</option>
                                     <option value="wantToRead">Want to Read</option>
                                     <option value="read">Read</option>
                                     <option value="none">None</option>
                                  </select>
                                </div>
                            </div>
                          <div className="book-title">{aBook.title}</div>
                          <div className="book-authors">{aBook.authors}</div>
                        </div>
                    </li>
              </div>
        );
      }
    
    
export default Book;