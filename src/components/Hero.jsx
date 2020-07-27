
import React, { Component } from "react";

class Hero extends Component{

    state = {heroid: 99 };
    render(){
        return (<React.Fragment>
             <h1>Avengers incoming..</h1>
        <button>Click here {this.state.heroid }</button> 
            </React.Fragment>);
    }

}

export default Hero;