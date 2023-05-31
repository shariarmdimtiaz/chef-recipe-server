const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//data file url
const chefs = require('./data/chefs.json');

app.use(cors());

//default url message
app.get('/', (req, res) => {
    res.send('Chefs server is running')
});

// get all chefs data
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

//get data by id
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(n => n._id === id);
    res.send(selectedChef)
})

//check running port
app.listen(port, () => {
    console.log(`API is running on port: ${port}`)
})
