const {
  IAMClient,
  CreateUserCommand,
  GetUserCommand,
} = require("@aws-sdk/client-iam")

const iamClient = new IAMClient()

const params = {
  UserName: "Pero",
}

const run = async () => {
  try {
    const data = await iamClient.send(new GetUserCommand(params))
    console.log("Success", data)
    return data
  } catch (err) {
    try {
      const result = await iamClient.send(new CreateUserCommand(params))
      console.log("User is created", result)
      return result
    } catch (err) {
      console.log("Error", err)
    }
  }
}
run()
