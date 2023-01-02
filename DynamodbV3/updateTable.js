import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },

  TableName: "employee2",
}

const run = async () => {
  try {
    const data = await ddbClient.send(new UpdateTableCommand(params))
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

run()
