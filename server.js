const express = require('express');
const body_parser = require("body-parser")

const app = express();
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())

const users = [
	{
		username: 'johndoe@gmail.com',
		password: 'test123',
		name: 'John Doe', 
		primary_goal: 'Gain muscle', 
		gender: 'Male',
		age: 21,
		height: 69,
		weight: 200,
		max_bench: 300, 
		max_squat: 350,
		max_press: 150,
		max_deadlift: 400, 
		daily_calories: 3000
	},
];

app.get('/api/users', (req, res) => {	
	res.json(users);

});

app.post('/api/login/', (req, res)  => {
	const email = req.body.email
	const password = req.body.password

})


const port = 5000;

app.listen(port, () => `Server started on port ${port}`);