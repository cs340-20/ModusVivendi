import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Redirect
} from 'react-router-dom'
import logo from '../../images/MV_resize.png'
import "../../bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"

let redirected = false 

export default class MainNavbar extends Component {

    state = {
        redirect: false 
    }

    setRedirect = () => {
        this.setState({redirect: true})
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/workout' />
        }
    }
    
    componentDidUpdate(p) {
        console.log(p)
        this.props.appProps.username = p.appProps.username
        document.getElementById("login_button").innerText = this.props.appProps.username
        if(redirected === false)
            this.setRedirect()
        redirected = true
    }

    render() {
        // window.setInterval(()  => {
        //     console.log(this.props.appProps)
        // }, 1000)
        console.log(this.props.appProps)
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
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/diet" className="nav-link">Diet</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/workout" className="nav-link" type="submit" to="/workout">Workout</Link>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-outline-success my-2 my-sm-0" id="login_button" type="submit" to="/login">
                       {this.props.appProps.username}
                    </Link>
                    </form>
                    {this.renderRedirect()}
                </div>
            </nav>
        </div>  
        )
    }
}
