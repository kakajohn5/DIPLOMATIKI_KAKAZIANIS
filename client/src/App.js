import React, { Fragment, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Articles from './components/auth/articles';
import DOCCHAT from './components/auth/DOCCHAT';
import PSYCHAT from './components/auth/psychat';
import Room from './components/auth/room';
import MAIN from './components/auth/MAinp';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Learn from './components/auth/learn';
if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () =>{
  useEffect(() => {
      store.dispatch(loadUser());
  },[]);
  return (
 <Provider store={store}>
 <Router>
   
   <Fragment>
      <Alert />
       <Routes>
       <Route exact path = '/navbar' element = {<Navbar/>}/>
         <Route exact path = '/Mainp' element = {<MAIN/>}/>
         <Route exact path = '/room' element = {<Room/>}/>
         <Route exact path = '/learn' element = {<Learn/>}/>
         <Route exact path = '/articles' element = {<Articles/>}/>
         <Route exact path = '/docchat' element = {<DOCCHAT/>}/>
         <Route exact path = '/psychat' element = {<PSYCHAT/>}/>
         <Route exact path = '/register' element = {<Register/>}/>
         <Route exact path = '/login' element    = {<Login/>}/>
       </Routes>
   </Fragment>
 </Router>
 </Provider>
)};
export default App;
