```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let logList = try await account.listLogs(
    queries: [], // optional
    total: false // optional
)

```
