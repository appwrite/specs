```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let identityList = try await account.listIdentities(
    queries: [], // optional
    total: false // optional
)

```
