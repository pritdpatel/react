import React from 'react';
import '../CSS/form.css'
class Form extends React.Component{

handleOnclick(e){
    e.preventDefault();
    alert("this is your name"+e.target.form[0].value);
    alert("password "+e.target.form[1].value);
}
    render(){
        
        return <div>
            <form action="/start" method='POST' >

                <label for="uname">username</label>
                <input id="uname" type="text" /><br/>
                <label for="password">Password</label>
                <input id="password" type="password" /><br/>
                <input type="submit" value="Submit" onClick={this.handleOnclick}/>
            </form>
        </div>;
    }
}
export default Form;