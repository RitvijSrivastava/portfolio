import React,{Component} from 'react';
import Home from './Home';
import Projects from '../components/Projects';
import { Switch, Route } from 'react-router-dom';
class Routing extends Component{

    render(){
        return(
           <Switch>               
               <Route exact path='/home' component={Home} />
               <Route exact path='/projects' component={Projects} />
               <Route to='/' component={Home} />
           </Switch>
        );
    }
}

export default Routing;

