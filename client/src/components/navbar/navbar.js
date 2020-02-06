import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../images/MV_resize.png'
import "./navbar.css"
import { Nav } from 'react-bootstrap'

export default class MainNavbar extends Component {

    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#"><img src={logo} alt="ModusVivendi"></img></Navbar.Brand>
                <Navbar.Collapse id="nav_collapse" className="pull-right">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Diet</Nav.Link>
                        <Nav.Link href="#">Workout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
