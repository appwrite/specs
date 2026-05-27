```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let sites = Sites(client)

let variable = try await sites.updateVariable(
    siteId: "<SITE_ID>",
    variableId: "<VARIABLE_ID>",
    key: "<KEY>", // optional
    value: "<VALUE>", // optional
    secret: false // optional
)

```
