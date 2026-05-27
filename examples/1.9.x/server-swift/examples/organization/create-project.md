```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let organization = Organization(client)

let project = try await organization.createProject(
    projectId: "",
    name: "<NAME>",
    region: .fra // optional
)

```
