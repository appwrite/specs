```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let organization = Organization(client)

let project = try await organization.updateProject(
    projectId: "<PROJECT_ID>",
    name: "<NAME>"
)

```
