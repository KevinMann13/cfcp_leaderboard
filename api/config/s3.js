var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-2" //Region
})

const s3 = new AWS.S3();

module.exports = s3