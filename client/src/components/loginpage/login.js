import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css'

/* Attempt a login request */
function login(email, password) {
    
    /* Error check for no email/password */
    if(email === undefined || email === null || email === '') {

        const message = 'No email provided'
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
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then((resp) => {
        
    })
    
    
}

const Loginpage = (props) => {
    return (
    <div>
        <Form >
            <FormGroup>
                <Label className='all-form' for="Email">Email</Label>
                <Input className= 'Input-form' type="email" name="email" id="email" placeholder="Your Email" />
            </FormGroup>

            <FormGroup>
                <Label className='all-form' for="Password">Password</Label>
                <Input className= 'Input-form' type="password" name="password" id="password" placeholder="Your Password" />
            </FormGroup>

            <Button className= "Input-form" onClick={() => { login(document.getElementById('email').value, document.getElementById('password').value) }}>
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

