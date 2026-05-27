```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let target = try await account.updatePushTarget(
    targetId: "<TARGET_ID>",
    identifier: "<IDENTIFIER>"
)

```
