```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let presences = Presences(client)

let presenceList = try await presences.list(
    queries: [], // optional
    total: false, // optional
    ttl: 0 // optional
)

```
