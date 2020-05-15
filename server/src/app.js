const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const route = require('./route');
const sequelize = require('./config/sequelize')
const port = 3000;

// Test DB Connection
sequelize.authenticate()
    .then(() => console.log('Connected to the database successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get('/api/cinemas', route.getCinemas);
app.get('/api/cinema/:id', route.getCinema);
app.get('/api/movies', route.getMovies);

app.listen(port, () => {
    console.log('Express Server is running');
});
