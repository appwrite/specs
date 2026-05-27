```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let backups = Backups(client)

let backupPolicy = try await backups.getPolicy(
    policyId: "<POLICY_ID>"
)

```
