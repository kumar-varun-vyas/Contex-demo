import React from 'react';

import {MyContext} from './context';
import {Consumer} from './context';


class Salary extends React.Component{

    render (){
        return(
            <React.Fragment>
            <h1> Salary Component</h1>
            
            <Consumer>
                {({salary , clickChange}) =>
                <React.Fragment>
                 <h2>Salary : {salary} </h2>
                 <button onClick={clickChange}>Change Salary</button>
                 
                 </React.Fragment>
                 }
            </Consumer>
        
            </React.Fragment>
        );
    }
}
export default Salary;