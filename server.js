const express = require('express');
const app = express();

const dogs = ['Doggo', 'Pupper', 'Woofer']

app.get('/api/dogs', (req, res) => {
	// Send the dogs array to the user
	res.send(dogs)
});

app.listen(8000, () => console.log('Dog api app listening on port 8000!'));