import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainNavbar from './components/navbar/navbar'
import Registration from './components/Registration/Registration'
import Loginpage from './components/loginpage/login'
import Workout from './components/Workout/Workout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
    <div className="App">
        <Router>
            <MainNavbar />
            <Switch>
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Loginpage} />
                <Route path="/workout" component={Workout} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;