const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// METHODS:
// app.get();
// app.post();
// app.put();
// app.delete();

//A route responding to the url /api/movies which sends a string containing "All films"
app.get(`/api/movies`, (req, res) => {
    res.send('All films');
});

//A route that responds to the url /api/movies/<movie id> and returns a JSON object containing {id: <movie id>}
app.get(`/api/movies/:id`, (req, res) => {
    res.send({
        id: req.params.id
    });
});

// An / api / employee / route that returns a status 304
app.get(`/api/employee`, (req, res) => {
    res.sendStatus(304);
});

//A route responding to the url /api/employee?name=<employee name> which sends a 404 status, with a string containing "Unable to retrieve employee" 
app.get(`/api/employee/:name`, (req, res) => {
    res.status(404).send('Unable to retrieve employee');
});


app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});