// Admin kan lägga till movie
import React from 'react';
import '../../App.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loungeid: "2", date: "", moviedbid: "", bookable: ""};
  }

  handleClick = () => {
    fetch("http://localhost:52662/api/viewings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        loungeid: this.state.loungeid,
        date: this.state.date,
        moviedbid: this.state.moviedbid,
        bookable: this.state.bookable
      })
    }).then(() => this.setState({ loungeid: "2", date: "", moviedbid: "", bookable: ""}));
  };

  render() {
    return (
      <>


      <div>
        
        <form class="form-horizontal">
        <h3>Add movie to database</h3>
        <div class="form-group">
        <label class="control-label col-sm-6">
          Lounge id:{" "}</label>
          <div class="col-sm-6">
          <input 
            type="text" class="form-control"
            placeholder="2"
            required 
            value={this.state.loungeid}
            onChange={e => this.setState({ loungeid: e.target.value})}
            disabled/>
            </div></div>
            <div class="form-group">
        <label class="control-label col-sm-6">
          DateTime:{" "}</label>
          <div class="col-sm-6">
          <input 
            type="text" class="form-control"
            placeholder="YYYY-MM-DDT00:00:00"
            required 
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value})}
            /> YYYY-MM-DDT00:00:00
        </div></div>
        <div class="form-group">
        <label class="control-label col-sm-6">
          MovieDB id:{" "}</label>
          <div class="col-sm-6">
          <input 
            type="text" class="form-control"
            required 
            value={this.state.moviedbid}
            onChange={e => this.setState({ moviedbid: e.target.value})}
            />
        </div></div>
        <div class="form-group">
        <label class="control-label col-sm-6">
          Bookable?</label>
          <div class="col-sm-6">
          <input 
            type="text" class="form-control"
            required
            value={this.state.bookable}
            onChange={e => this.setState({ bookable: e.target.value})}
            /> True / False
            </div></div>
        <div class="col-sm-6">
          <input class="btn btn-primary"
          type="button"
          value="Add movie" 
          onClick={() => 
            {this.handleClick();
            alert('Movie uploaded!');}} 
          />
           - <a href="http://themoviedb.com" type="button" class="btn btn-primary" target="_blank">The Movie Database</a>
          </div>
          </form>         
      </div>
      </>

    );
  }
}
export default AddMovie;