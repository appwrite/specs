```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let backups = Backups(client)

let backupPolicyList = try await backups.listPolicies(
    queries: [] // optional
)

```
