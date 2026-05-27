```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let users = Users(client)

let result = try await users.deleteMFAAuthenticator(
    userId: "<USER_ID>",
    type: .totp
)

```
