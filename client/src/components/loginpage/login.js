import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css'

/* Attempt a login request */
function login(username, password, props) {
    
    /* Error check for no email/password */
    if(username === undefined || username === null || username === '') {

        const message = 'No username provided'
        console.error(message)
        alert(message)
    } else if(password === undefined || password === null || password === '') {
        
        const message = 'No password provided'
        console.error(message)
        alert(message)

        /* TODO: Further error check password...check length/characters/numbers etc */
    } 

    /* Send post request */
    fetch('/api/login/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then((resp) => {
        return resp.text()
    }).then((data) => {
        if(data === 'invalid_username')
            alert('Invalid Username')
        else if(data === 'invalid_password')
            alert('Invalid Password')
        else if(data === 'logged_in') {
            props.change_username(username)
            props.user_has_authenticated(true)
        }
    })
}

const Loginpage = (props) => {
    return (
    <div>
        <Form >
            <FormGroup>
                <Label className='all-form' for="username">Username</Label>
                <Input className= 'Input-form' name="username" id="username" placeholder="Your Username" />
            </FormGroup>

            <FormGroup>
                <Label className='all-form' for="Password">Password</Label>
                <Input className= 'Input-form' type="password" name="password" id="password" placeholder="Your Password" />
            </FormGroup>

            <Button className= "Input-form" onClick={() => { login(document.getElementById('username').value, document.getElementById('password').value, props) }}>
                LOGIN
            </Button>
            
            <Link className= "Input-form" type="submit" to="/registration">
                REGISTRATION
            </Link>
        </Form>
    </div>
   );
}

export default Loginpage;

