import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class Logout extends React.Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }
    
    render() {
        return(
            <div class="container">
                <h1>You have been logged out</h1>
                <Link to="/Login">Log in</Link>
            </div>
        )
    }
}