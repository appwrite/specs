```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let activities = Activities(client)

let activityEvent = try await activities.getEvent(
    eventId: "<EVENT_ID>"
)

```
