import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
       <nav classnameName='navbar bg-dark'>
           <h1>
               <Link to='/'>
                   <i classnameName='fas fa-code'/> Med for YOU     
               </Link>
           </h1>
           <ul>
               <li>
                   <a href ='!#'>Register</a>
               </li>
               <li>
                  <Link to='/register'>Register</Link>
               </li>
               <li>
                  <Link to='/login'>Login</Link>
               </li>
           </ul>
       </nav>
    );
};
export default Navbar;