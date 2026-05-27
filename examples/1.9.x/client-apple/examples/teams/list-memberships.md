```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let teams = Teams(client)

let membershipList = try await teams.listMemberships(
    teamId: "<TEAM_ID>",
    queries: [], // optional
    search: "<SEARCH>", // optional
    total: false // optional
)

```
