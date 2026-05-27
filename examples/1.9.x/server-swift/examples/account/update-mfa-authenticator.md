```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

let account = Account(client)

let user = try await account.updateMFAAuthenticator(
    type: .totp,
    otp: "<OTP>"
)

```
