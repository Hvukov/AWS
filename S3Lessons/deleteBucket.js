const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const params = {
  Bucket: "test-bucket-hrvoje79",
}

s3.deleteBucket(params, function (err, data) {
  if (err) {
    console.log(err.stack)
  } else {
    console.log("Bucket deleted", data)
  }
})
