import React from 'react';
import Employee from './Employee';
import {MyContext} from './context';
import {Provider} from './context';

class App extends React.Component{
 
    state = {
        name : "varun",
        department: "development",
        salary : 5000
    }

    changeHandler =()=>{
        this.setState({
            salary: this.state.salary +500
        })
    }

   

    render(){
        const data = {
            salary : this.state.salary,
            clickChange: this.changeHandler
        }
        return(
            <React.Fragment>
            <h1>App Component </h1>
           
            <Provider value = {data} >
            <Employee  />
            </Provider>
            </React.Fragment>
        );
    }
}

export default App;