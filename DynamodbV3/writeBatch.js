import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  RequestItems: {
    employee2: [
      {
        PutRequest: {
          Item: {
            id: { N: "2" },
            emp_name: { S: "test" },
          },
        },
      },

      {
        PutRequest: {
          Item: {
            id: { N: "3" },
            emp_name: { S: "test" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "4" },
            emp_name: { S: "test2" },
          },
        },
      },
    ],
  },
}

const run = async () => {
  try {
    const data = await ddbClient.send(new BatchWriteItemCommand(params))
    console.log("Data is added", data)
    return data
  } catch (err) {
    console.log(err)
  }
}

run()
