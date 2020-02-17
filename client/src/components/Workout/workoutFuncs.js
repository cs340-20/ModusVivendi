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
        lose: Math.round(bmr - 500),
        gain: Math.round(bmr + 500),
        maintain: Math.round(bmr)
    };
}

// Function takes daily calorie target and weight as arguments
// and returns an object of daily macronutrient targets
function macro_nutrients(calories, weight) {
    let protein = weight;
    calories-=protein*4;

    let fats = 0.35*weight;
    calories-=fats*9;

    let carbs = calories/4;

    return {
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fats: Math.round(fats)
    };
}

// let calorie_array = calorie_calc(20, 130, 67, "Male");
// let macro_array = macro_nutrients(calorie_array.maintain, 130);

// console.log(calorie_array.maintain);
// console.log(macro_array.protein);
// console.log(macro_array.fats);
// console.log(macro_array.carbs);

export default calorie_calc;
export default macro_nutrients;