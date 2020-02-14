import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './login.css'
import Registration from '../Registration/Registration';

const Loginpage = (props) => {
  return (
    <div>
      
      <Form>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="with a placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">
          Login
        </Button>
        
        <Router> 
          <Link className= "btn-lg btn-dark btn-block" type="submit" to="/registration">
            Registration
          </Link>
          <Switch>
            <Route path="/registration">
              <Registration />
            </Route>
          </Switch>
        </Router>
    </Form>
      
    </div>
   );
}

export default Loginpage;

