```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

let storage = Storage(client)

let file = try await storage.getFile(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>"
)

```
