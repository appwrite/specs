```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let messaging = Messaging(client)

let result = try await messaging.deleteSubscriber(
    topicId: "<TOPIC_ID>",
    subscriberId: "<SUBSCRIBER_ID>"
)

```
