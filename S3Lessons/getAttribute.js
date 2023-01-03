const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const params = {
  Bucket: "petar-bucket-1",
  Key: "newfile2.txt",
  ObjectAttributes: ["ObjectSize"],
}

s3.getObjectAttributes(params, function (err, data) {
  if (err) {
    console.log(err, err.stack)
  } else {
    console.log(data)
  }
})
