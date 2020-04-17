import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Diet.css'

// This function uses the Mifflin-St Jeor Equation
// weight is body weight in kg
// height is body height in cm
// gender is the string "Male" or "Female"
// Return value is an object of daily calories based on goals
function calorie_calc(age, weight, height, gender) {
    let bmr = 0;

    // Convert from inches/pounds to kg/cm
    weight*=0.453592; 
    height*=2.54;

    // Calculate bmr
    if(gender === "Male") {
        bmr = 10*weight + 6.25*height - 5*age + 5;
    }
    else { // Female
        bmr = 10*weight + 6.25*height - 5*age - 161;
    }

    // Return value based on goal
    return {
        lose: Math.round(bmr-500),
        gain: Math.round(bmr+500),
        maintain: Math.round(bmr)
    };
}

// Function takes daily calorie target and weight as arguments
// and returns an object of daily macronutrient targets
function macro_nutrients(calories, weight) {
    let protein = weight;
    calories-=protein*4;

    let fats = 0.35*weight;
    calories -= fats*9;

    let carbs = calories/4;

    return {
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fats: Math.round(fats)
    };
}



const Diet = (props) => {
  let cals;

  if(props.goal === "Lose weight") {
      cals = calorie_calc(props.age, props.weight, props.height, props.gender).lose;
  }
  else if(props.goal === "Gain muscle") {
    cals = calorie_calc(props.age, props.weight, props.height, props.gender).gain;
  }
  else if(props.goal === "Maintain muscle and weight") {
    cals = calorie_calc(props.age, props.weight, props.height, props.gender).maintain;
  }
  else {
    cals = null;
  }

  return (
    <div>
      <Jumbotron className='diet'>
        <h1 className="display-3">Hello { props.name }!</h1>

        <p>Your calories are based on your age, weight, height and gender.</p>
        <p>Calories will be calculated based on whether your goal is to</p>
        <p>lose weight, gain muscle or maintain muscle and weight. The equation</p>
        <p>used to do the calculations is called the Mifflin-St Jeor Equation.</p>
        <p>Your daily protein, carbs and fat are calculated using your daily</p>
        <p>calories and weight. Each gram of carbs is 4 calories, each gram of</p>
        <p>protein is 4 calories and each gram of fat is 9 calories.</p>

        <h2>Daily calories: { cals }</h2>
        <h2>Protein: { macro_nutrients(cals, props.weight).protein } grams</h2>
        <h2>Carbs: { macro_nutrients(cals, props.weight).carbs } grams</h2>
        <h2>Fat: { macro_nutrients(cals, props.weight).fats } grams</h2>
      </Jumbotron>
    </div>
  );
};

export default Diet;