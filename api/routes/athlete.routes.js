const express = require('express');

const athleteRoute = express.Router();

const db = require('../config/db.config')
let Athlete = db.Athlete;

athleteRoute.route('/').post((req, res, next) => {
    let athlete = req.body;
    Athlete.create(athlete).then(result => {
        res.json(result);
    })
});

athleteRoute.route('/').get((req, res) => {
    Athlete.findAll({include: ['Team']}).then(athletes => {
        res.json(athletes)
    })
})

athleteRoute.route('/:id').get((req, res) => {
    Athlete.findByPk(req.params.id).then(athlete => {
        res.json(athlete);
    })
})

athleteRoute.route('/:id').put((req, res, next) => {
    let athlete = req.body;
    let id = req.body.id

    Athlete.update(athlete,
        { where: { id: id } }
    ).then(() => {
        res.status(200).json({ msg: "updated successfully an athlete with id = " + id });
    });
})

module.exports = athleteRoute;