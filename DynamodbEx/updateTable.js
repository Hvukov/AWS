const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const dynamodb = new AWS.DynamoDB()

const params = {
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
  TableName: "employee",
}

dynamodb.updateTable(params, (err, data) => {
  if (err) {
    console.log("Error", err.stack)
  } else {
    console.log("Success", data)
  }
})
