const express = require('express')
const router = express.Router();

router.get("/meow", function(req, res, next) {
    res.status(200).send("mix1");
})

module.exports = router;