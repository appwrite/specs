```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

let account = Account(client)

let token = try await account.createMagicURLToken(
    userId: "<USER_ID>",
    email: "email@example.com",
    url: "https://example.com", // optional
    phrase: false // optional
)

```
