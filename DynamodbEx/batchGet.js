const AWS = require("aws-sdk")

AWS.config.update({
  region: "us-east-1",
})

const dynamodb = new AWS.DynamoDB()

const params = {
  RequestItems: {
    employee: {
      Keys: [
        {
          id: {
            S: "1",
          },
        },

        {
          id: {
            S: "2",
          },
        },
      ],
    },
  },
}

dynamodb.batchGetItem(params, (err, data) => {
  if (err) {
    console.log("Error", err.stack)
  } else {
    data.Responses.employee.forEach((item, index) => {
      console.log(item)
    })
  }
})
