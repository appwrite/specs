```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

let storage = Storage(client)

let fileList = try await storage.listFiles(
    bucketId: "<BUCKET_ID>",
    queries: [], // optional
    search: "<SEARCH>", // optional
    total: false // optional
)

```
