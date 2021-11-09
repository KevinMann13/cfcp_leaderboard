const express = require('express');

const teamRoute = express.Router();
const db = require('../config/db.config')
let Team = db.Team;

// Add Team
teamRoute.route('/').post((req, res, next) => {
    let team = req.body;
    Team.create(team).then(result => {
        res.json(result);
    })
});

// Get all Teams
teamRoute.route('/').get((req, res) => {
    Team.findAll({include: ['Athletes']}).then(teams => {
        res.json(teams)
    })
})

// Get Team
teamRoute.route('/:id').get((req, res) => {
    Team.findByPk(req.params.id).then(customer => {
        res.json(customer);
    })
})

// Update Team
teamRoute.route('/:id').put((req, res, next) => {
    let team = req.body;
    let id = req.body.id

    Team.update(team,
        { where: { id: id } }
    ).then(() => {
        res.status(200).json({ msg: "updated successfully a team with id = " + id });
    });
})

module.exports = teamRoute;