```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let teams = Teams(client)

let teamList = try await teams.list(
    queries: [], // optional
    search: "<SEARCH>", // optional
    total: false // optional
)

```
