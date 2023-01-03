import { S3Client, DeleteBucketCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const params = {
  Bucket: "petar-bucket-v4",
}

const run = async () => {
  try {
    const data = await s3Client.send(new DeleteBucketCommand(params))
    console.log("Bucket deleted", data)
  } catch (err) {
    console.log("Unable to delete bucket", err)
  }
}

run()
