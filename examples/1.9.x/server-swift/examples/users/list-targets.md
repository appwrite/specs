```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let users = Users(client)

let targetList = try await users.listTargets(
    userId: "<USER_ID>",
    queries: [], // optional
    total: false // optional
)

```
