import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class MovieDataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isloaded: false,
            viewings1: [],
    };
}

loaddata (){
    fetch("http://localhost:52662/api/viewings1")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    viewings1: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )}
    componentDidMount() {
        this.loaddata();
    }

deleteMovie(id){
    fetch("http://localhost:52662/api/viewings1/" + id, {
        method: 'DELETE'
    }).then(() => {this.loaddata()});
}


updateBookable(id) {
    fetch("http://localhost:52662/api/viewings1/" + id, {
        method: 'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
        body: JSON.stringify({
            bookable: this.setState(prevState => ({
                check: !prevState.check
              }))
          })
        }).then(() => {this.loaddata()});   
}


    render() {
        const { error } = this.state;

        if(error) {
            return (
                <div>Error: {error.message}</div>
            )
    } else {
        return(
            <div class="container">
                <h2>All movies in database</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Lounge Id</th>
                            <th>Date</th>
                            <th>MovieDB Id</th>
                            <th>Bookable?</th>
                            <th>Set</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.viewings1.map(viewing => (
                            <tr key={viewing.id}>
                                <td>{viewing.id}</td>
                                <td>{viewing.loungeid}</td>
                                <td>{viewing.date}</td>
                                <td>{viewing.moviedbid}</td>
                                <td>{viewing.bookable ? "True " : "False "} </td>
                                <td><FontAwesomeIcon icon={faExchangeAlt} onClick={() => {
                                    this.updateBookable(viewing.id);
                                    alert('Updated!');
                                }} />
                                </td>

                                <td><FontAwesomeIcon icon={faTrash} onClick={() => {
                                    this.deleteMovie(viewing.id);
                                    alert('Movie deleted!'); }} /></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
            </div>
            
        )
    }
}
}

   
    export default MovieDataGrid;
