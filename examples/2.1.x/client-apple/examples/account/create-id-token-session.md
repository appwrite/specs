```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let account = Account(client)

let session = try await account.createIdTokenSession(
    provider: .amazon,
    idToken: "<ID_TOKEN>",
    nonce: "<NONCE>", // optional
    accessToken: "<ACCESS_TOKEN>", // optional
    accessTokenExpiry: 0, // optional
    name: "<NAME>" // optional
)

```
