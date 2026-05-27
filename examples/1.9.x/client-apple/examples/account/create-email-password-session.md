```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let session = try await account.createEmailPasswordSession(
    email: "email@example.com",
    password: "password"
)

```
