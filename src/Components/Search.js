import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'; 


class Search extends Component {  
    render() {
          return (
            <div>
               <p>Search Page</p>
               <NavLink exact to="/">Home</NavLink>
            </div> 
          );
       }
    }
    
    export default Search;