```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let target = try await account.createPushTarget(
    targetId: "<TARGET_ID>",
    identifier: "<IDENTIFIER>",
    providerId: "<PROVIDER_ID>" // optional
)

```
