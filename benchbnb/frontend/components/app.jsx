import React from'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

export default () => {
    return (
        <div>
            <header>                
                <h1>Bench BNB</h1>
                <GreetingContainer />
            </header>


            <AuthRoute path='/login' component={LoginFormContainer}/>
            <AuthRoute path='/signup' component={SignupFormContainer}/>
        </div>
    );
}