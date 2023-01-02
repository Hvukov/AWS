const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: "employee",
}

dynamodb.describeTable(params, (err, data) => {
  if (err) {
    console.log("Error", err.stack)
  } else {
    console.log("Success", data)
  }
})
