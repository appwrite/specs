```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let presences = Presences(client)

let presence = try await presences.get(
    presenceId: "<PRESENCE_ID>"
)

```
