const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const fs = require("fs")

const docClient = new AWS.DynamoDB.DocumentClient()

const table = "movies"

const year = 2015
const title = "The Big New Movie"

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title,
  },
}

docClient.get(params, function (err, data) {
  if (err) {
    console.log("Unable to read item. Error JSON:", err)
  } else {
    console.log(data)
  }
})
