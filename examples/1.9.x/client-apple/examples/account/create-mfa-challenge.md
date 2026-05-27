```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let mfaChallenge = try await account.createMFAChallenge(
    factor: .email
)

```
