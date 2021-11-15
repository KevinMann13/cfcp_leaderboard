const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken')

const userRoute = express.Router();

const db = require('../config/db.config')
let User = db.User;

const auth = require('../middleware/auth')

userRoute.route('/authenticate').post((req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        User.findOne({ where: { email: email } }).then(user => {
            if (user == undefined) {
                return res.json({ 'statusCode': 500, 'message': "Invalid email address" })
            }

            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.SESSION_SECRET,
                    {
                        expiresIn: "2h",
                    }
                );

                user.token = token;

                return res.status(200).json(user);
            } else {
                return res.json({ 'statusCode': 500, 'message': "Invalid password" })
            }
        })
    } catch (error) {
        console.log(error)
    }
});

userRoute.route('/register').post((req, res, next) => {
    try {
        email = req.body.email
        password = req.body.password
        athlete_id = req.body.athlete_id

        User.findOne({ where: { email: email } }).then(old_user => {
            if (old_user) {
                return res.json({ 'statusCode': 500, 'message': "Account with that email address already exists." })
            }

            encrypted_password = bcrypt.hashSync(password, 10)

            User.create({
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                password: encrypted_password,
                athleteId: athlete_id
            }).then(user => {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.SESSION_SECRET,
                    {
                        expiresIn: "2h",
                    }
                );

                user.token = token

                res.status(201).json(user)
            });
        })
    } catch (error) {
        console.log(error)
    }
});

userRoute.route('/profile').get(auth, (req, res) => {
    User.findOne({where: {email: req.user.email}, include: { all: true, nested: true }}).then(user => {
        res.json(user);
    })
})

module.exports = userRoute;