const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());
//  schedule cron and get data from get api <> may be some open api

//get data 
//manipulate && check
// store in db a function can do it 
// but i can give api to others their mails and send them trading data which they use
// api to post all this for data use
// post api to store the mails and creds
//send mails

app.post("/getMails", async function (req, res) {
  const {  } = req.body;
 
  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  };

  try {
    // await dynamoDbClient.put(params).promise();
    // res.json({ userId, name });
    //querying 
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
// get stocks 
// evaluate 
// store in db
// send mail
// 
//--> choose an algorithm >main thing<
module.exports.handler = serverless(app);

// this is moving towards making an exchange

/* 
  -> what changes the value of stock or where that data is generated (how?)
  -> if i can get data i can work on it
  -> and i can add lots of features predictions (maybe?)(best?)
*/