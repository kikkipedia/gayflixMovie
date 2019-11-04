import React from 'react';
import AddMovie from '../movie/AddMovie';
import MovieDataGrid from '../movie/MovieDataGrid';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../App.css';

export default class AdminPage extends React.Component {

    render() {
        return(
            <Router>
                <div class="container center-align">
                    <ul>   
                        <h1>Welcome admin !</h1>                    
                        <p><Link to="/MovieDataGrid">Edit movies showing</Link></p>
                        <p><Link to="/AddMovie">Add movies and showing</Link></p>
                    </ul>
                    <hr />

                    <Switch>
          <Route path="/MovieDataGrid">
            <MovieDataGrid />
          </Route>
          <Route path="/AddMovie">
            <AddMovie />
          </Route>
        </Switch>
                </div>
            </Router>
        )
    }
}
    


