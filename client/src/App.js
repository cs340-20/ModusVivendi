import React from 'react'
import './App.css'
// import './bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainNavbar from './components/navbar/navbar'
import Customers from './components/customers/customers'
import Registration from './components/registration/Registration'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// <MainNavbar />     
//       <Registration />

function App() {
  return (
    <div className="App">
    <MainNavbar />
    <Router>
        <Switch>
            <Route path="/register">
                <Registration />
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;