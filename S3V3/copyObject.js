import { S3Client, CopyObjectCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const params = {
  Bucket: "petar-bucket-v3",
  CopySource: "petar-bucket-v4/test1.jpeg",
  Key: "copied.jpeg",
}

const run = async () => {
  try {
    const data = await s3Client.send(new CopyObjectCommand(params))
    console.log("Object copied", data)
  } catch (err) {
    console.log("Unable to copy object", err)
  }
}
run()
