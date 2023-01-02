const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const dynamodb = new AWS.DynamoDB()

const params = {
  Key: {
    id: {
      S: "2",
    },
  },
  TableName: "employee",
}

dynamodb.getItem(params, (err, data) => {
  if (err) {
    console.log("Error", err.stack)
  } else {
    console.log(data["Item"])
  }
})
