```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let functions = Functions(client)

let function = try await functions.updateFunctionDeployment(
    functionId: "<FUNCTION_ID>",
    deploymentId: "<DEPLOYMENT_ID>"
)

```
