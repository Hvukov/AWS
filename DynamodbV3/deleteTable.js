import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  TableName: "employee2",
}

const run = async () => {
  try {
    const data = await ddbClient.send(new DeleteTableCommand(params))
    console.log("Table is deleted", data)
  } catch (err) {
    console.log(err)
  }
}

run()
