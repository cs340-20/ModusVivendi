import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../images/MV_ondark.png'
import "./navbar.css"

let navbar_style = {
    width: '80px',
    height: '80px'
}

export default class MainNavbar extends Component {

    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#"><img src={logo} style={navbar_style}></img>ModusVivendi</Navbar.Brand>
            </Navbar>
        )
    }
}
