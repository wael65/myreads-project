import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'; 
import Shilf from './Shilf'

class Main extends Component {  
render() {
      return (
        <div>
           <p>Home Page</p>
           <div className="open-search">
           <NavLink className="plus" to="/search">Search</NavLink>
           </div>

           < Shilf />
           < Shilf />
           < Shilf />
        </div> 
      );
   }
}

export default Main;
