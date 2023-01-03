import { S3Client, DeleteBucketPolicyCommand } from "@aws-sdk/client-s3"

const s3Client = new S3Client()

const BUCKET_NAME = "petar-bucket-v4"

const bucketPolicyParams = {
  Bucket: BUCKET_NAME,
}

const run = async () => {
  try {
    const data = await s3Client.send(
      new DeleteBucketPolicyCommand(bucketPolicyParams)
    )
    console.log("Policy deleted from the bucket", data)
  } catch (err) {
    console.log("Can not delete the policy", err)
  }
}

run()
