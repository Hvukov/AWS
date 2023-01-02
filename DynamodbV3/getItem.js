import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  TableName: "employee2",
  Key: {
    id: { N: "1" },
  },
}

const run = async () => {
  try {
    const data = await ddbClient.send(new GetItemCommand(params))
    console.log("Item is fetched", data)
    return data
  } catch (err) {
    console.log(err)
  }
}

run()
