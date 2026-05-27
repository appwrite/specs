```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let presences = Presences(client)

let result = try await presences.delete(
    presenceId: "<PRESENCE_ID>"
)

```
