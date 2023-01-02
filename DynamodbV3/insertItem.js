import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  TableName: "employee2",
  Item: {
    id: { N: "1" },
    emp_name: { S: "Hrcules" },
  },
}

const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params))
    console.log("Item is inserted", data)
    return data
  } catch (err) {
    console.log(err)
  }
}

run()
