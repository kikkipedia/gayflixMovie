import React from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom'

class MemberPage extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isloaded: false,
            users: [],
        }
    };

    componentDidMount() {
        fetch("http://localhost:52662/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { isLoaded, error } = this.state;
        return (
            <div class="container">

                {this.state.users.map(user => 
                (
                    <div key={user.id}>
                        <p className="text-left">User name: {user.username}</p>
                        <p className="text-left">Email: {user.email}</p>
                        <p className="text-left">Created: {user.created}</p>
                    </div>
                ))}
            </div>
        );
    }
}
export default withRouter(MemberPage);