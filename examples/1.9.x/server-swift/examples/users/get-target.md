```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let users = Users(client)

let target = try await users.getTarget(
    userId: "<USER_ID>",
    targetId: "<TARGET_ID>"
)

```
