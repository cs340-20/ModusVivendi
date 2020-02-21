import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './login.css'

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

            <Button className= "Input-form" >
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

