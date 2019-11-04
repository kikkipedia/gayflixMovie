import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './menu';

import Logout from './components/member/Logout';
import MemberPage from './components/member/MemberPage';
import AdminPage from './components/member/AdminPage';
import Showing from './components/movie/Showing';
import Register from './components/member/Register';
//import PrivateRoute from './PrivateRoute';
import MoviesHome from './components/movie/MoviesHome';
import { AuthContext } from './context/auth';

const routing = ( 
  <AuthContext.Provider value={false}>
    <Router>
    <div>
      <Menu />      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/MemberPage" component={MemberPage} />
        <Route exact path="/AdminPage" component={AdminPage} />
        <Route exact path="/Showing" component={Showing} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/MoviesHome" component={MoviesHome} />
      </Switch>   
    </div>
  </Router>
  </AuthContext.Provider>

)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
