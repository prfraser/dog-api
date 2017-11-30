const express = require('express');
const app = express();

const dogs = ['Doggo', 'Pupper', 'Woofer']
const owners = ['Henry', 'Mark', 'Oliver']

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/api/dogs', (req, res) => {
	// Send the dogs array to the user
	res.send(dogs)
});

app.get('/api/owners', (req, res) => {
	// Send the owners array to the user
	res.send(owners)
});

app.listen(8000, () => console.log('Dog api app listening on port 8000!'));