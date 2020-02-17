import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './login.css'
import Registration from '../Registration/Registration';

const Loginpage = (props) => {
  return (
    <div>
      
      <Form className='all-form'>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input className= 'Input-form' type="email" name="email" id="email" placeholder="with a placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password</Label>
          <Input className= 'Input-form' type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>

        <Button className= 'Input-form' >
          Login
        </Button>
        
        <Link className= "Input-form" type="submit" to="/registration">
          Registration
        </Link>
      
    </Form>
      
    </div>
   );
}

export default Loginpage;

