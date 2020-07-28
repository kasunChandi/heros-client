
import React, { Component } from "react";

class Hero extends Component{

    state = {
      heroid: this.props.avenger.id,
     //  movies: this.props.avenger.movies , 
   // likeCount: this.props.likeCount
  };
    render(){
    /*    return (<React.Fragment>
            <h1 style = {{width :"20rem", fontSize : "90px"}}>Avengers Incoming..</h1>
             <h2>{this.ishero()}</h2>
             <button type="button" className="btn btn-primary">Click Hear</button>
        
            </React.Fragment>);

            */
           return (
               <div className="card" style= {{width: "18rem"}}>
                <img src="https://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{this.props.avenger.name}</h5>
                <h6>{this.props.avenger.birthname}</h6>
                 <p className="card-text"></p>
                     <ul>{this.showMovies()}</ul>
                
                <button className="btn btn-primary" onClick = { () => {this.likeAvegers(5)} } >
           Like {" "}
           <span className="badge badge-light"> {this.props.avenger.likeCount} </span>
           </button>
            </div>
            </div>
           );
    }

    ishero(){

      //  if(this.state.heroid < 0) return "not an Avengers"
      //  else return "Is an Avengers"

      return this.state.heroid < 0 ? "Not an Avengers" : "Is an Avengers";
    }

    showMovies(){
       if(this.props.avenger.movies.length === 0)return <p>No movies available</p>;
     return this.props.avenger.movies.map((movie) => <li key ={movie}> {movie}</li>);
    }

    likeAvegers = (likeCounter) =>{
   // console.log(this.state.likeCount++);
this.setState({likeCount: this.state.likeCount +likeCounter})
    };

}

export default Hero;