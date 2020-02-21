const express = require('express');

const app = express();

const users = [
	{
		username: 'johndoe69',
		password: 'test123',
		name: 'John Doe', 
		primary_goal: 'Gain muscle', 
		gender: 'Male',
		age: 21,
		height: 69,
		weight: 200,
		max_bench: 300, 
		max_squat: 400,
		max_press: 150,
		max_deadlift: 500, 
		daily_calories: 3000
	},
];

app.get('/api/users', (req, res) => {	
	res.json(users);

});

app.post('/api/login/', (req, res) => {
	console.log(req.body)
})


const port = 5000;

app.listen(port, () => `Server started on port ${port}`);