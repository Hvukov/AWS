const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const params = {
  Bucket: "petar-bucket-1",
  CopySource: "petar-bucket-2/newfile2.txt",
  Key: "newfile2.txt",
}

s3.copyObject(params, function (err, data) {
  if (err) {
    console.log(err, err.stack)
  } else {
    console.log(data)
  }
})
