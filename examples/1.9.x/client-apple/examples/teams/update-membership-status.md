```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let teams = Teams(client)

let membership = try await teams.updateMembershipStatus(
    teamId: "<TEAM_ID>",
    membershipId: "<MEMBERSHIP_ID>",
    userId: "<USER_ID>",
    secret: "<SECRET>"
)

```
