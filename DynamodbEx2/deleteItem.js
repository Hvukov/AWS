const AWS = require("aws-sdk")
const { log } = require("console")

AWS.config.update({
  region: "us-east-1",
})

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

console.log("Deleting the movie")

docClient.delete(params, function (err, data) {
  if (err) {
    console.log("Unable to delete movie", err)
  } else {
    console.log("Movie deleted:", data)
  }
})
