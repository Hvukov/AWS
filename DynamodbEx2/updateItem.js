const AWS = require("aws-sdk")
const { log } = require("console")

AWS.config.update({
  region: "us-east-1",
})

const fs = require("fs")

const docClient = new AWS.DynamoDB.DocumentClient()

const year = 2015
const title = "The Big New Movie"

const params = {
  TableName: "movies",
  Key: {
    year: year,
    title: title,
  },

  UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
  ExpressionAttributeValues: {
    ":r": 5.5,
    ":p": "Everything happens all at once.",
    ":a": ["Larry", "Moe", "Curly"],
  },
  ReturnValues: "UPDATED_NEW",
}

log("Updating the item...")
docClient.update(params, function (err, data) {
  if (err) {
    console.log("Unable to update item", err)
  } else {
    console.log(data)
  }
})
