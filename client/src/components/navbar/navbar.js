import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import logo from '../../images/MV_resize.png'
import "../../bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"

export default class MainNavbar extends Component {

    render() {
        return (  
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
                <a className="navbar-brand" href="#"><img src={logo} alt="ModusVivendi"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/diet" className="nav-link">Diet</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/workout" className="nav-link" type="submit" to="/workout">Workout</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-outline-success my-2 my-sm-0" type="submit" to="/login">
                       Login/Register
                    </Link>
                    </form>
                </div>
            </nav>
        </div>  
        )
    }
}
