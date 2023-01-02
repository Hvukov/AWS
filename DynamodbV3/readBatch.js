import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  RequestItems: {
    employee2: {
      Keys: [
        {
          id: {
            N: "1",
          },
        },

        {
          id: {
            N: "2",
          },
        },

        {
          id: {
            N: "3",
          },
        },
      ],
    },
  },
}

const run = async () => {
  try {
    const data = await ddbClient.send(new BatchGetItemCommand(params))
    console.log(data.Responses["employee2"])
  } catch (err) {
    console.log(err)
  }
}

run()
