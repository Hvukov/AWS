const AWS = require("aws-sdk")
const fs = require("fs")

const s3 = new AWS.S3()

const uploadImage = (fileName) => {
  const fileContent = fs.readFileSync(fileName)

  const params = {
    Bucket: "petar-bucket-3",
    ACL: "public-read",
    Key: "test2.jpeg",
    Body: fileContent,
  }

  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
}

uploadImage("test.jpeg")
