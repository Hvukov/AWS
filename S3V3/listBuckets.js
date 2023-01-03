import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}))
    console.log(data.Buckets, "Success")
  } catch (err) {
    console.log(err)
  }
}

run()
