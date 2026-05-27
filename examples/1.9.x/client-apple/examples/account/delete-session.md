```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let result = try await account.deleteSession(
    sessionId: "<SESSION_ID>"
)

```
