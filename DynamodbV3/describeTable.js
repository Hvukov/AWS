import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb"

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

const params = {
  TableName: "employee2",
}

const run = async () => {
  try {
    const data = await ddbClient.send(new DescribeTableCommand(params))
    //console.log("Sucess", data)
    console.log(data.Table.KeySchema)
    return data
  } catch (err) {
    console.log("Error", err)
  }
}
run()
