```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let project = Project(client)

let oAuth2Authentik = try await project.updateOAuth2Authentik(
    clientId: "<CLIENT_ID>", // optional
    clientSecret: "<CLIENT_SECRET>", // optional
    endpoint: "<ENDPOINT>", // optional
    enabled: false // optional
)

```
