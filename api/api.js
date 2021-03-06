const express = require('express')
const router = express.Router();
const app = express();

const userRoute = require('./routes/user.routes');
const teamRoute = require('./routes/team.routes');
const athleteRoute = require('./routes/athlete.routes');
const attendanceRoute = require('./routes/attendance.routes');
const rowRoute = require('./routes/row.routes');

router.use('/user', userRoute)
router.use('/team', teamRoute)
router.use('/athlete', athleteRoute)
router.use('/attendance', attendanceRoute)
router.use('/row', rowRoute)

module.exports = router;
