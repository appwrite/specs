```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let sites = Sites(client)

let deployment = try await sites.createVcsDeployment(
    siteId: "<SITE_ID>",
    type: .branch,
    reference: "<REFERENCE>",
    activate: false // optional
)

```
