import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainNavbar from './components/navbar/navbar'
import Registration from './components/Registration/Registration'
import Loginpage from './components/loginpage/login'
import Workout from './components/Workout/Workout'
import Diet from './components/Diet/Diet'
import Home from './components/home/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'


function App() {

    /* State variables */
    const [is_authenticated, user_has_authenticated] = useState(false)

    const appProps = {is_authenticated, user_has_authenticated}

    return (
    <div className="App">
        <Router appProps={{is_authenticated, user_has_authenticated}}>
            <MainNavbar />
            <Switch>
                <AppliedRoute exact path="/" component={Home} appProps={appProps} />
                <AppliedRoute path="/home" component={Home} appProps={appProps} />
                <AppliedRoute path="/registration" component={Registration} appProps={appProps} />
                <AppliedRoute path="/login" component={Loginpage} appProps={appProps} />
                <AppliedRoute path="/workout" component={Workout} workout_login={appProps} />
                <AppliedRoute path="/diet" component={Diet} appProps={appProps} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;