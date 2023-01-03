import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const bucketParams = {
  Bucket: "petar-bucket-v4",
  Key: "test2.jpeg",
}

const run = async () => {
  try {
    const data = await s3Client.send(new DeleteObjectCommand(bucketParams))
    console.log("Object deleted", data)
  } catch (err) {
    console.log("Unable to delete object", err)
  }
}

run()
