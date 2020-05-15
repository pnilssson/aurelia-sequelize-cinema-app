const models = require('./models/models')

const getCinemas = (req, res) => {
    models.Cinema.findAll()
        .then(cinemas => {
            res.send(cinemas)
        }).catch(error => {
            res.status(400).send(error);
        })
}

const getCinema = (req, res) => {
    models.Cinema.findOne({where: {id: req.params.id }})
        .then(cinema => {
            res.send(cinema)
        }).catch(error => {
        res.status(400).send(error);
    })
}

const getMovies = (req, res) => {
    models.Movie.findAll()
        .then(movies => {
            res.send(movies)
        }).catch(error => {
            res.status(400).send(error)
        })
}

module.exports = {
    getCinemas: getCinemas,
    getCinema: getCinema,
    getMovies: getMovies
}
