import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import '../../App.css';

export default class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:52662/api/users'), {
        method: 'POST',
        headers: {  
            'Accept': 'application/json',  
            'Content-Type': 'application/json'  },
        body: JSON.stringify({  
            username: this.state.username,  
            password: this.state.password  
        }).then(res => {
            const user = res.data[0].username;
            const password = res.data[0].password;
            const username = this.state.username;
            const passwordEntered = this.state.password;
            if(username === '' && passwordEntered === '') {
                document.getElementById('status').innerHTML = '<p>Please Enter A Valid Username and Password</p>';
            }
            else if(user === username && passwordEntered === password) {
                document.getElementById('status').innerHTML = '';
                console.log(user, password)
            }
            else {
                document.getElementById('status').innerHTML = '<p>Please Enter A Valid Username and Password</p>';
            }
        })
        .catch(error => {
            console.log(error);
          })
        
    }
        }



render() {
    return (
        <Form>
              <Form.Row>
              <Form.Group as={Col}>
              <Form.Label>Username</Form.Label>
                <Form.Control
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="text"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
              </Form.Group>
              </Form.Row>
              <Button className="btn btn-sm btn-light" onClick={this.onSubmit}>
                <i className="fas fa-sign-in-alt"></i> Login
              </Button>
        </Form>

    )
}

}
