const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const params = {
  Bucket: "petar-bucket-1",
  Delete: {
    Objects: [
      {
        Key: "newfile2.txt",
      },
      {
        Key: "copied.txt",
      },
    ],
  },
}

s3.deleteObjects(params, function (err, data) {
  if (err) {
    console.log(err, err.stack)
  } else {
    console.log(data)
  }
})
