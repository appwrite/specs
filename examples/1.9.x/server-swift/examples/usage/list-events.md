```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let usage = Usage(client)

let usageEventList = try await usage.listEvents(
    queries: [], // optional
    total: false // optional
)

```
