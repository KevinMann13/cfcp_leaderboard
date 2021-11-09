const express = require('express');

const attendanceRoute = express.Router();

const db = require('../config/db.config')
let Attendance = db.Attendance;

attendanceRoute.route('/').post((req, res, next) => {
    let attendance = req.body;
    Attendance.create(attendance).then(result => {
        res.json(result);
    })
});

attendanceRoute.route('/').get((req, res) => {
    Attendance.findAll().then(attendances => {
        res.json(attendances)
    })
})

attendanceRoute.route('/:id').get((req, res) => {
    Attendance.findByPk(req.params.id).then(attendance => {
        res.json(attendance);
    })
})

attendanceRoute.route('/:id').put((req, res, next) => {
    let attendance = req.body;
    let id = req.body.id

    Attendance.update(attendance,
        { where: { id: id } }
    ).then(() => {
        res.status(200).json({ msg: "updated successfully an attendance with id = " + id });
    });
})

module.exports = attendanceRoute;