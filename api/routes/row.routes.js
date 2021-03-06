const express = require('express');
const crypto = require('crypto')

const sharp = require('sharp')


const auth = require('../middleware/auth')
const db = require('../config/db.config')
const s3 = require('../config/s3')

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

    const name_parts = req.files.file.name.split('.');
    const image_suffix = name_parts[name_parts.length - 1];

    filename = crypto.randomUUID() + "." + image_suffix
    sharp(req.files.file.data)
        .resize(500, 500, {
            fit: 'inside',
        })
        .withMetadata()
        .toBuffer()
        .then(min_file => {
            const params = {
                Bucket: 'cfcp-comp-images',
                Key: filename,
                Body: min_file
            };

            s3.upload(params, function (err, data) {
                if (err) {
                    res.status(500).send(err)
                }

                db.User.findOne({ where: { email: req.user.email } }).then(user => {
                    db.Row.create({
                        date: row_data.date,
                        meters: row_data.meters,
                        athleteId: user.athleteId,
                        proof_img: data.Location
                    }).then(row => {
                        res.json(row)
                    })
                })
            });
        },
            error => { res.status(500).send(error) }
        );
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