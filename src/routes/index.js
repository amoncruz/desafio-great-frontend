import React from 'react';
import Home from "../Pages/Home";
import Register from "../Components/Register";
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Header from '../Components/Header';
import Search from '../Pages/Search';
import Details from '../Pages/Details';
import Remove from '../Pages/Remove';

const Routes = () =>{

    return(
            <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/register" component={Register}/> 
                    <Route path="/details/:cpf" component={Details}/>  
                    <Route path="/remove" component={Remove}/>                 
                </Switch>
            </Router>
            </>
    );
}

export default Routes;