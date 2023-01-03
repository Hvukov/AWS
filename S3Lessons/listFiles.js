const AWS = require("aws-sdk")

const s3 = new AWS.S3()

const params = {
  Bucket: "petar-bucket-1",
}

s3.listObjects(params, function (err, data) {
  if (err) {
    console.log(err, err.stack)
  } else {
    //console.log(data)
    data.Contents.forEach((element) => {
      console.log(element.Key)
    })
  }
})
