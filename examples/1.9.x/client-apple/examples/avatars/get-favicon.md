```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let avatars = Avatars(client)

let bytes = try await avatars.getFavicon(
    url: "https://example.com"
)

```
