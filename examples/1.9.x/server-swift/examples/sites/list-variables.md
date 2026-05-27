```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let sites = Sites(client)

let variableList = try await sites.listVariables(
    siteId: "<SITE_ID>",
    queries: [], // optional
    total: false // optional
)

```
