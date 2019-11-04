// visar lista på alla filmer
import React from 'react';
import Booking from './Booking'


class Showings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isloaded: false,
            viewings: [],

            //janna
            tickets: 2, 
            userid: "1",
            viewingid: 0,
            payed: "true",
            id: ""
    };
}

    componentDidMount() {
        fetch("http://localhost:52662/api/viewings")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    viewings: result
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

    SetBooking(){
      fetch("http://localhost:52662//api/bookings", { 
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        userid: this.state.userid,
        viewingid: this.state.viewingid,
        payed: this.state.payed,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === null) {
        } else {
          console.log(data);
          alert( "Hurra!")
        }
      });

    }


    render() {
        const imgSrc = "https://image.tmdb.org/t/p/w300";
        const { isLoaded, error } = this.state;
       
        
        if (error) {
            return <div> { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else { 
            return (
                <div class="container">
                    {this.state.viewings.map(viewing =>                        
                        
                            viewing.Bookable ? (
                                <div key={viewing.id}>
                    <div class="row">
                   
                   <div className="col-sm-4 p-3">
                    <img src= {imgSrc + viewing.PosterPath} className="rounded img-responsive" alt="movie" />
                        </div>
                        
                        <div className="col-sm-4 p-3">
                <h1 className="text-left">{viewing.MovieName}</h1>
                <p className="text-left">Showing: {viewing.ViewingDate}</p> 
                <p className="text-left">Length: {viewing.Length} min</p>
                <p className="text-left"> {viewing.Overview}</p>
                <p className="text-right">Avaliable seats: /{viewing.TotalSeats}</p>

                <input className="btn" type="button" value="Book" onClick={() => 
                    this.SetBooking(this.state.id, this.state.userid, this.state.payed )} />

                </div></div></div>
                            ) : (
                                <></>
                            )
                            
                            
                    )}
                </div>
            );
        }
    }              
            
}  
     
    export default Showings;