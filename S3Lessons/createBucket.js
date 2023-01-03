const AWS = require("aws-sdk")

//AWS.config.update({region:'us-east-1'})
//AWS.config.update({accessKeyId:'mykey', secretAccessKey:'mysecret'})

const s3 = new AWS.S3()

const params = {
  Bucket: "petar-bucket-3",
  //ACL:'private',  private is the default
  //ACL: "public-read-write",
  //ACL: "public-read",
}

s3.createBucket(params, function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
