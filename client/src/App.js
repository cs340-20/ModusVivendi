import React from 'react'
import './App.css'
// import './bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainNavbar from './components/navbar/navbar'
import Customers from './components/customers/customers'
import Registration from './components/Registration/Registration'
<<<<<<< HEAD
import Loginpage from './components/loginpage/login'
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
>>>>>>> ba98998815cc3f2d516548e074673d7d9a39279e

// <MainNavbar />     
//       <Registration />

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <MainNavbar />     
      <Registration />
      <Customers />
      <Loginpage/>
=======
    <MainNavbar />
    <Router>
        <Switch>
            <Route path="/register">
                <Registration />
            </Route>
        </Switch>
    </Router>
>>>>>>> ba98998815cc3f2d516548e074673d7d9a39279e
    </div>
  );
}

export default App;