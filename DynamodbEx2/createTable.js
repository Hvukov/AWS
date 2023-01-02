const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: "movies",
  KeySchema: [
    { AttributeName: "year", KeyType: "HASH" }, //Partition key
    { AttributeName: "title", KeyType: "RANGE" }, //Sort key
  ],

  AttributeDefinitions: [
    { AttributeName: "year", AttributeType: "N" },
    { AttributeName: "title", AttributeType: "S" },
  ],

  ProvisionedThroughput: {
    ReadCapacityUnits: 4,
    WriteCapacityUnits: 4,
  },
}

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log(err, err.stack)
  } else {
    console.log("Table Creted", data)
  }
})
