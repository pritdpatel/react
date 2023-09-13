import React from "react";
import "./App.css";
import { Path, Links_name } from './include/data_set/Data';
class App extends React.Component{
  App(props){
    this.props=props
  }
  render (){

    
    return (<div>
      <header className="main_header">
        <h1>Dometell</h1>
    
        <links className="list_of_link">
          <a className="element" href="@">{Links_name['id.name']}</a>
          <a className="element" href="!">python Projects</a>
          <a className="element" href="#">Java projects</a>
        </links>  
      </header>
      <main id="main">
        <p>{Links_name['id']['number']}</p>
      </main>
    </div>);
  }
}

export default App;