
const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const userRoute = express.Router();

const db = require('../config/db.config')
let User = db.User;

userRoute.route('/authenticate').post((req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        if (error) { return next(error); }

        req.logIn(user, (error) => {
          if (error) { return next(error); }
          res.status(400).json({ "statusCode": 200, "user": user });
          next()
        });
      })(req, res, next);
});

userRoute.route('/register').post((req, res, next) => {
    User.findOne({where: { email: req.body.email }}).then(user => {
        if (user) {
            res.json({'statusCode': 500, 'message': "Account with that email address already exists."})
            return
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hashed_password) => {
                User.create({
                    email: req.body.email,
                    password: hashed_password,
                    salt: salt
                }).then(user => {
                    res.json(user)
                })
            });
          });
    })
});

// userRoute.route('/').get((req, res) => {
//     Athlete.findAll({include: ['team']}).then(athletes => {
//         res.json(athletes)
//     })
// })

// userRoute.route('/:id').get((req, res) => {
//     Athlete.findByPk(req.params.id, {include: { all: true, nested: true }}).then(athlete => {
//         res.json(athlete);
//     })
// })

// userRoute.route('/:id').put((req, res, next) => {
//     let athlete = req.body;
//     let id = req.body.id

//     Athlete.update(athlete,
//         { where: { id: id } }
//     ).then(() => {
//         res.status(200).json({ msg: "updated successfully an athlete with id = " + id });
//     });
// })

module.exports = userRoute;