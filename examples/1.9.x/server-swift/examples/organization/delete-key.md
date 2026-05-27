```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let organization = Organization(client)

let result = try await organization.deleteKey(
    keyId: "<KEY_ID>"
)

```
