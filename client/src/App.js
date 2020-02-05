import React from 'react'
import logo from './logo.svg'
import './App.css'
// import './bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainNavbar from './components/navbar/navbar'
import Customers from './components/customers/customers'


function App() {
  return (
    <div className="App">
      <MainNavbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Customers />
      </header>
    </div>
  );
}

export default App;