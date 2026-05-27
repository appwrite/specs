```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tokens = Tokens(client)

let result = try await tokens.delete(
    tokenId: "<TOKEN_ID>"
)

```
