const express = require('express');

const teamRoute = express.Router();
const db = require('../config/db.config')
let Team = db.Team;

teamRoute.route('/leaderboard').get((req, res) => {
    q = `
    SELECT teams.id, teams.name, COUNT(attendances.id) as score
    FROM teams
    LEFT JOIN athletes ON teams.id = athletes.team_id
    LEFT JOIN attendances ON attendances.athlete_id = athletes.id
    GROUP BY 1,2
    ORDER BY 3 DESC`
    
    db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT }).then(leaderboard => {
        res.json(leaderboard)
    })
})

// Add Team
teamRoute.route('/').post((req, res, next) => {
    let team = req.body;
    Team.create(team).then(result => {
        res.json(result);
    })
});

// Get all Teams
teamRoute.route('/').get((req, res) => {
    Team.findAll({include: { all: true, nested: true }}).then(teams => {
        res.json(teams)
    })
})

// Get Team
teamRoute.route('/:id').get((req, res) => {
    Team.findByPk(req.params.id, {include: { all: true, nested: true }}).then(customer => {
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