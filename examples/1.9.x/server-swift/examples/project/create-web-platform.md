```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let project = Project(client)

let platformWeb = try await project.createWebPlatform(
    platformId: "<PLATFORM_ID>",
    name: "<NAME>",
    hostname: "app.example.com"
)

```
