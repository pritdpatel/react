import React from 'react';
import './App.css';

class Car {
    constructor(name){
        this.car_name=name;
    }
    present=()=>this.car_name;
}

class App extends React.Component{
    //variable
    Hello= ()=> <h1>Modern</h1>;
    name=this.Hello();
    render(){
        return (<div>
            {this.name}
        </div>);
    }
    //constructor
    //mathod
    
} 

export default App;
