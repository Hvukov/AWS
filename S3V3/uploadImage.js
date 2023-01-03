import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

import { readFileSync } from "fs"

const s3Client = new S3Client()

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
    const data = await s3Client.send(new PutObjectCommand(bucketParams)) //pass bucketParams as a parameter

    console.log("Image uploaded", data)
  } catch (err) {
    console.log("Unable to upload image", err)
  }
}

run("test.jpeg")
