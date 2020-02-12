import React from 'react'
import './App.css'
// import './bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import MainNavbar from './components/navbar/navbar'
import Customers from './components/customers/customers'
import Registration from './components/Registration/Registration'


function App() {
  return (
    <div className="App">
      <MainNavbar />     
      <Registration />
      <Customers />
    </div>
  );
}

export default App;