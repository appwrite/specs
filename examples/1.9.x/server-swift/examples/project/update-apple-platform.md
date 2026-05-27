```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let project = Project(client)

let platformApple = try await project.updateApplePlatform(
    platformId: "<PLATFORM_ID>",
    name: "<NAME>",
    bundleIdentifier: "<BUNDLE_IDENTIFIER>"
)

```
