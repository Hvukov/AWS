import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const bucketParams = {
  Bucket: "petar-bucket-v4",
  Delete: {
    Objects: [
      {
        Key: "test1.jpeg",
      },
      {
        Key: "test2.jpeg",
      },
    ],
  },
}

const run = async () => {
  try {
    const data = await s3Client.send(new DeleteObjectsCommand(bucketParams))
    console.log("Objects deleted", data)
  } catch (err) {
    console.log("Unable to delete objects", err)
  }
}

run()
