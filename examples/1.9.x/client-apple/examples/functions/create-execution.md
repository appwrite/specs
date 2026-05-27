```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
    functionId: "<FUNCTION_ID>",
    body: "<BODY>", // optional
    async: false, // optional
    path: "<PATH>", // optional
    method: .gET, // optional
    headers: [:], // optional
    scheduledAt: "<SCHEDULED_AT>" // optional
)

```
