```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let functions = Functions(client)

let executionList = try await functions.listExecutions(
    functionId: "<FUNCTION_ID>",
    queries: [], // optional
    total: false // optional
)

```
