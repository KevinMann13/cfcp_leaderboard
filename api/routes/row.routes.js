const express = require('express');
const auth = require('../middleware/auth')
const db = require('../config/db.config')

const rowRoute = express.Router();


rowRoute.route('/leaderboard').get((req, res) => {
    q = `
    SELECT athletes.id, athletes.name, teams.name as team_name, IFNULL(SUM(\`rows\`.meters), 0) as total_meters
    FROM athletes
    LEFT JOIN \`rows\` ON athletes.id = \`rows\`.athlete_id
    LEFT JOIN teams ON teams.id = athletes.team_id
    GROUP BY 1,2,3
    ORDER BY 4 DESC`
    
    db.sequelize.query(q, { type: db.sequelize.QueryTypes.SELECT }).then(leaderboard => {
        res.json(leaderboard)
    })
})

rowRoute.route('/').post(auth, (req, res, next) => {
    let row_data = req.body
    
    db.User.findOne({where: {email: req.user.email}}).then(user => {
        db.Row.create({
           date: row_data.date,
           meters: row_data.meters,
           athleteId: user.athleteId
        }).then(rowing => {
            res.json(rowing)
        })
    })
});

// rowRoute.route('/').get((req, res) => {
//     Attendance.findAll().then(attendances => {
//         res.json(attendances)
//     })
// })

// rowRoute.route('/:id').get((req, res) => {
//     Attendance.findByPk(req.params.id).then(attendance => {
//         res.json(attendance);
//     })
// })

// rowRoute.route('/:id').put((req, res, next) => {
//     let attendance = req.body;
//     let id = req.body.id

//     Attendance.update(attendance,
//         { where: { id: id } }
//     ).then(() => {
//         res.status(200).json({ msg: "updated successfully an attendance with id = " + id });
//     });
// })

module.exports = rowRoute;