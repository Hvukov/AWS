const AWS = require("aws-sdk")

const s3 = new AWS.S3()

s3.listBuckets(function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data["Buckets"])
  }
})
