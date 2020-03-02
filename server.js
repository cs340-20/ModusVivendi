const express = require('express');
const body_parser = require("body-parser")

const app = express();
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())

const users = [
	{
		username: 'johndoe',
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
	
	/* Very vulnerable code. Just for testing purposes */
	const username = req.body.username
	const password = req.body.password

	if(username === users[0].username) {

		if(password === users[0].password) {
			console.log("Logging in " + username)
			res.send('logged_in')
		} else {
			res.send('invalid_password')
			//window.alert("Invalid password for username " + username)
		}
	} else {
		res.send('invalid_username')
		//window.alert("Invalid username " + username)
	}
})


const port = 5000;

app.listen(port, () => `Server started on port ${port}`);