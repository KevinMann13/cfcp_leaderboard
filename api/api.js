const express = require('express')
const router = express.Router();
const app = express();

const teamRoute = require('./routes/team.routes');
const athleteRoute = require('./routes/athlete.routes');

router.use('/team', teamRoute)
router.use('/athlete', athleteRoute)

// router.get("/meow", function(req, res, next) {
//     res.status(200).send("mix1");
// })

module.exports = router;