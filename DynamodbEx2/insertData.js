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
  Item: {
    year: year,
    title: title,
    info: {
      plot: "Nothing happens at all.",
      rating: 7,
    },
  },
}

console.log("Adding the movie...")
docClient.put(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to add movie",
      title,
      ". Error JSON:",
      JSON.stringify(err, null, 2)
    )
  } else {
    console.log("Movie added:", title)
  }
})
