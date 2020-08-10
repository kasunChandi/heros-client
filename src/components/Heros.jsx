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

              <Hero key ={avenger.id}  
              avenger={avenger} 
              onDelete={() => this.deleteAvenger(avenger.id)} 
              onLike ={() => this.likeAvenger(avenger)}  />
              </div>
              ))}

            </div>
           
          </div>

        );


    }

    async likeAvenger(avenger){
          await axios.put(`http://localhost:5000/api/heroes/${avenger.id}`,{
            likeCount : avenger.likeCount +1,
          });

let allavengers = [...this.state.allavengers];
let index = allavengers.indexOf(avenger);
allavengers[index] = {...avenger };
allavengers[index].likeCount++;
this.setState({allavengers : allavengers })

    }
     
   async deleteAvenger(avengertodelete){
     let newAvengers = this.state.allavengers.filter( (avenger)=> avenger.id !== avengertodelete);
      await axios.delete(`http://localhost:5000/api/heroes/${avengertodelete}`)
      this.setState({allavengers : newAvengers});
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