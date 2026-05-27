```swift
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let sites = Sites(client)

let deployment = try await sites.createTemplateDeployment(
    siteId: "<SITE_ID>",
    repository: "<REPOSITORY>",
    owner: "<OWNER>",
    rootDirectory: "<ROOT_DIRECTORY>",
    type: .branch,
    reference: "<REFERENCE>",
    activate: false // optional
)

```
