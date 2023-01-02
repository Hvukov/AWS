const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: "test",
  Item: {
    id: {
      S: "4",
    },
    name: {
      S: "Hrc",
    },
  },
}

dynamodb.putItem(params, (err, data) => {
  if (err) {
    console.log("Error", err)
  } else {
    console.log("Success", data)
  }
})
