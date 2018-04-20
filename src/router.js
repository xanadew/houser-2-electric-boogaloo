import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Dash from './components/Dash';
import Wiz1 from './components/Wiz1';
import Wiz2 from './components/Wiz2';
import Wiz3 from './components/Wiz3';
import Wiz4 from './components/Wiz4';
import Wiz5 from './components/Wiz5';

export default (
    <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={Dash} path='/dash'/>
        <Route component={Wiz1} path='/wiz/1'/>
        <Route component={Wiz2} path='/wiz/2'/>
        <Route component={Wiz3} path='/wiz/3'/>
        <Route component={Wiz4} path='/wiz/4'/>
        <Route component={Wiz5} path='/wiz/5'/>
    </Switch>
)