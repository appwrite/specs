```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let project = Project(client)

let oAuth2X = try await project.updateOAuth2X(
    customerKey: "<CUSTOMER_KEY>", // optional
    secretKey: "<SECRET_KEY>", // optional
    enabled: false // optional
)

```
