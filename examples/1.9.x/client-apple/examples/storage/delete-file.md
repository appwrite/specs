```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let storage = Storage(client)

let result = try await storage.deleteFile(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>"
)

```
