import "./Menu.css";
import React from "react";
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from '../Home';
import {About} from '../About'
import {Contact} from '../Contact'
import MyList from '../MyList/index';
import MyReuse from '../MyReuse/index'
import Exceptions from '../Exceptions/index'
import Hoc from '../Hoc/index'
import Ajax from '../Ajax/index'
import Login from '../Login/index'
function template() {
  return (
    <div className="menu">
         <div className="menu-items">
           <a href="#/home">Home</a>
           <a href="#/about">About</a>
           <a href="#/contact">Contact</a>
           <a href="#/list">List</a>
           <a href="#/reuse">Reusable Components</a>
           <a href="#/exceptions" >Exceptions</a>
           <a href="#/hoc" >HOC</a>
           <a href="#/ajax" >AJAX</a>
           <a href="#/login" >Login</a>

         </div>
         <HashRouter>
              <Routes>
                  <Route path='/home'  element={<Home />}  />
                  <Route path='/about'   element={<About />} />
                  <Route path='/contact'  element={<Contact />}  />
                  <Route path='/list'  element={<MyList />}  />
                  <Route path='/reuse'  element={<MyReuse />}  />
                  <Route path='/exceptions'  element={<Exceptions />}  />
                  <Route path='/hoc'  element={<Hoc />}  />
                  <Route path='/ajax'  element={<Ajax />}  />
                  <Route path='/login'  element={<Login />}  />
                  <Route path='*' element={<Navigate to='/home' />} />
              </Routes>
         </HashRouter>
    </div>
  );
};

export default template;
