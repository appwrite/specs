```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let teams = Teams(client)

let team = try await teams.updateName(
    teamId: "<TEAM_ID>",
    name: "<NAME>"
)

```
