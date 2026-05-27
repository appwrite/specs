```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let project = Project(client)

let platformLinux = try await project.updateLinuxPlatform(
    platformId: "<PLATFORM_ID>",
    name: "<NAME>",
    packageName: "<PACKAGE_NAME>"
)

```
