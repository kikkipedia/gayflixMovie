import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand as={Link} to="/"><img src="./logo256.png" alt="mini logo" width="20"/> gayflix</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/MoviesHome">movies</Nav.Link>
                    <Nav.Link as={Link} to="/Showing">showings</Nav.Link> 
                </Nav>
                <Nav>
                    
                    <Nav.Link as={Link} to="/MemberPage">profile</Nav.Link>
                    <Nav.Link as={Link} to="/Logout">log out</Nav.Link> 
                    <Nav.Link as={Link} to="/AdminPage">admin</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>


            /** 
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> gayflix</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="./">Home</Nav.Link>
                    <Nav.Link href="./movies">Movies</Nav.Link>
                    <Nav.Link href="./login">Log in</Nav.Link>
                </Nav>
            </Navbar>*/
                    );
    }
}

export default Menu