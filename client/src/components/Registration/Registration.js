import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.css'
// npm install --save reactstrap

const Registration = (props) => {
  return (
    <Form className='All-forms'>
      <FormGroup>
        <Label for="name">NAME</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="name" />
      </FormGroup>

      <FormGroup>
        <Label for="email">EMAIL</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="email" />
      </FormGroup> 

      <FormGroup>
        <Label for="password">PASSWORD</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="password" />
      </FormGroup>

      <FormGroup>
        <Label for="goal">What is your primary fitness goal?</Label>
        <Input className='Input-form' type="select" name="select" id="goal">
          <option>Lose weight</option>
          <option>Gain weight</option>
          <option>Maintain muscle and weight</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="gender">What is your gender?</Label>
        <Input className='Input-form' type="select" name="select" id="gender">
          <option>Male</option>
          <option>Female</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="age">How old are you?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="age" />
      </FormGroup>

      <FormGroup>
        <Label for="height">How many inches tall are you?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="height" />
      </FormGroup>

      <FormGroup>
        <Label for="weight">How many pounds do you weigh?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="weight" />
      </FormGroup>

      <FormGroup>
        <Label for="bench">What's your max bench weight in pounds?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="bench" />
      </FormGroup>

      <FormGroup>
        <Label for="squat">What's your max squat weight in pounds?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="squat" />
      </FormGroup>

      <FormGroup>
        <Label for="overhead-press">What's your max overhead-press weight in pounds?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="overhead-press" />
      </FormGroup>

      <FormGroup>
        <Label for="deadlift">What's your max deadlift weight in pounds?</Label>
        <Input className='Input-form' type="fill-in" name="fill-in" id="deadlift" />
      </FormGroup>

      <Button style={{ backgroundColor: '#55595c', color: 'white', fontSize: 20 }}>Register</Button>
    </Form>
  );
}

export default Registration;
