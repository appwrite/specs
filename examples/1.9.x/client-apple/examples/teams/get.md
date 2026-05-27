```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let teams = Teams(client)

let team = try await teams.get(
    teamId: "<TEAM_ID>"
)

```
