import React, { Component } from "react";
import axios from "axios";
import Hero from "./Hero";


class Heroes extends Component {

    state ={ 

allavengers : [

],

    };

    render () {  

        return (

          <div className ="container">
            <div className ="row">
              {this.state.allavengers.map((avenger) => (
              <div className ="col"  key ={avenger.id}>

              <Hero key ={avenger.id}  likeCount ={avenger.likeCount} avenger={avenger} />
              </div>
              ))}

            </div>
           
          </div>

        );


    }

     async componentDidMount(){

      let {data} = await axios.get("http://localhost:5000/api/heroes");
      console.log(data);
      
      let avengers = data.map((avenger)=>{
       return {
         id: avenger._id,
         name: avenger.name,
         birthname: avenger.birthname,
         likeCount : avenger.likeCount,
         imgUrl : avenger.imgUrl,
         movies: avenger.movies,
       };
      });
       
      this.setState( {allavengers : avengers});

    }



}
export default Heroes