import React, { Component } from 'react'
import logo from '../../images/MV_resize.png'
import "../../bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"

export default class MainNavbar extends Component {

    render() {
        return (    
            
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-1">
            <a class="navbar-brand" href="#"><img src={logo} alt="ModusVivendi"></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Diet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Workout</a>
                </li>
                
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login/Register</button>
                </form>
            </div>
        </nav>
        )
    }
}
