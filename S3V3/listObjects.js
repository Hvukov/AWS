import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const bucketParams = {
  Bucket: "petar-bucket-v4",
}

const run = async () => {
  try {
    const data = await s3Client.send(new ListObjectsCommand(bucketParams))
    //console.log("Objects listed", data.Contents)
    data.Contents.forEach((element) => {
      console.log(element.Key)
    })
  } catch (err) {
    console.log("Unable to list objects", err)
  }
}

run()
