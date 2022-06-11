const AWS = require('aws-sdk');
require("dotenv").config();

exports.dynamoDB = new AWS.DynamoDB.DocumentClient({
    region:'us-east-2',
    credentials:{
        accessKeyId:process.env.ACCESS_KEY,
        secretAccessKey:process.env.SECRET_KEY
    }
})

// module.exports = dynamoDB;