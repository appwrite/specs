```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let functions = Functions(client)

let variableList = try await functions.listVariables(
    functionId: "<FUNCTION_ID>",
    queries: [], // optional
    total: false // optional
)

```
