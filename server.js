const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
	const customers = [
		{
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

	res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server started on port ${port}`);