const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const models = require('./models');

models.sequelize.sync().then(() => {
    console.log('Connected to DB');

}).catch(err => console.log(err));


// Routes
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome'
}))

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the Sequiize',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server listening @ port ${port}`)
});


module.exports = app;