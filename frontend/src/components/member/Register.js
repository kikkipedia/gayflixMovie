import React from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", email: "", isAdmin: ""};
      }

      handleClick = () => {
        fetch("http://localhost:52662/api/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            isAdmin: this.state.isAdmin
          })
        })
        }
        // här vill jag att den ska routa till MemberPage typ .then(() => this.context.router.push("/MemberPage"));
        // men funkar inte SÅKLART!!
        
        render() {
            return (
              <>
              <div class="container">
                <div class="page-header">
                <h2>Register</h2></div>
                <form class="form-horizontal">
                <div class="form-group">
                <label class="control-label col-sm-6">
                  Username:{" "}</label>
                  <div class="col-sm-6">
                  <input 
                    type="text" class="form-control"
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value})}
                   />
                    </div></div>
                    <div class="form-group">
                <label class="control-label col-sm-6">
                  Password:{" "}</label>
                  <div class="col-sm-6">
                  <input 
                    type="text" class="form-control"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value})}
                    />
                </div></div>
                <div class="form-group">
                <label class="control-label col-sm-6">
                  Email:{" "}</label>
                  <div class="col-sm-6">
                  <input 
                    type="text" class="form-control"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value})}
                    />
                </div></div>
                <div class="form-group">
                <label class="control-label col-sm-6">
                  Is admin?:{" "}</label>
                  <div class="col-sm-6">
                  <input 
                    type="text" class="form-control"
                    value={this.state.isAdmin}
                    onChange={e => this.setState({ isAdmin: e.target.value})}
                    /> True / False
                </div></div>
                
                <div class="col-sm-6">
                  <input class="btn btn-primary"
                  type="button"
                  value="Register" 
                  onClick={() => 
                    {this.handleClick();
                    alert("Success!");}} 
                  />
                  </div>
                  
                  </form>
                  
              </div>
              </>
        
            );
          }
}
export default withRouter(Register);