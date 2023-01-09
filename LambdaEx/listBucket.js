const AWS = require("aws-sdk")

const s3 = new AWS.S3()

exports.myfunc = (event) => {
  s3.listBuckets(function (err, data) {
    if (err) {
      console.log("Error", err)
    } else {
      console.log("Success", data.Buckets)
    }
  })
}
