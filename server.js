const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
	const customers = [
		{name: 'John Doe', weight: 250, max_bench: 300, max_squat: 400, daily_calories: 3000},
		{name: 'Jane Doe', weight: 350, max_bench: 400, max_squat: 500, daily_calories: 2000},
		{name: 'Bill Smith', weight: 450, max_bench: 500, max_squat: 600, daily_calories: 1000}
	];

	res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server started on port ${port}`);