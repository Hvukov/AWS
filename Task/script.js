/**
 * save image to S3 bucket "images-my-task"
 * if the images was successfully saved, save the file data and the status "Created" to the DynamoDB table "Image-statuses"
 */

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"

import { readFileSync } from "fs"

const s3Client = new S3Client()

const ddbClient = new DynamoDBClient({ region: "us-east-1" })

// const params = {
//   TableName: "Image-statuses",
//   Item: {
//     id: { N: "1" }, // change this line to pass a number value
//     fileData: { S: "testjpeg" },
//     status: { S: "Created" },
//   },
// }

const params = {
  TableName: "employee",
  Item: {
    id: { S: "1" },
    fileData: { S: "test.jpeg" },
    status: { S: "Created" },
  },
}

const run = async (fileName) => {
  try {
    //first we need to read the file
    const fileContent = readFileSync(fileName)

    //then we need to create our bucket params
    const bucketParams = {
      Bucket: "petar-bucket-v4",
      ACL: "public-read",
      Key: "test2.jpeg",
      Body: fileContent,
    }

    //then we need to create our command with PutObjectCommand
    const dataBucket = await s3Client.send(new PutObjectCommand(bucketParams)) //pass bucketParams as a parameter

    const dataDynamodb = await ddbClient.send(new PutItemCommand(params))

    console.log("Image uploaded", dataBucket)
    //console.log("Item is inserted", dataDynamodb)
  } catch (err) {
    console.log("Unable to upload image", err)
  }
}

run("test.jpeg")

// import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"

// const ddbClient = new DynamoDBClient({ region: "us-east-1" })

// const params = {
//   TableName: "employee2",
//   Item: {
//     id: { N: "1" },
//     emp_name: { S: "Hrcules" },
//   },
// }

// const run = async () => {
//   try {
//     const data = await ddbClient.send(new PutItemCommand(params))
//     console.log("Item is inserted", data)
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }
