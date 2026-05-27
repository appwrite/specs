```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let sites = Sites(client)

let execution = try await sites.getLog(
    siteId: "<SITE_ID>",
    logId: "<LOG_ID>"
)

```
