import React, { Component } from 'react';
    
class Class_NongVanBach extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Nong Van Bach",
            class:"K22CNT2"
        }
    }
    users = {
        name:"Nong Van Bach",
        age:22
    }
    //ham xu ly su kien
    handleChange= (event)=>{
        this.setState({
            fullName:"Ho Van Ten",
        })
    }
  render() {
    return (
      <div>
            <h2>Class component Demo </h2>
            {this.users.name} - { this.users.age}
            <hr/>
            <h3> info: {this.props.info}</h3>
            <h3> Time: {this.props.time}</h3>
            <hr/>
            <h3> State:
                FullName: {this. state.fullName}-
                Class:{ this.state.class}
            </h3>
            <button onClick={ this.handleChange}> Change Name</button>
      </div>
    );
  }
}

export default Class_NongVanBach;