const express = require('express')
const router = express.Router();
const app = express();

const teamRoute = require('./routes/team.routes');
const athleteRoute = require('./routes/athlete.routes');
const attendanceRoute = require('./routes/attendance.routes');

router.use('/team', teamRoute)
router.use('/athlete', athleteRoute)
router.use('/attendance', attendanceRoute)

module.exports = router;