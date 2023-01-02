import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  TableName: "employee2",
  Key: {
    id: { N: "3" },
  },
}

const run = async () => {
  try {
    const data = await ddbClient.send(new DeleteItemCommand(params))
    console.log("Item is deleted", data)
    return data
  } catch (err) {
    console.log(err)
  }
}

run()
