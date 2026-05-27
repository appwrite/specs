```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let graphql = Graphql(client)

let any = try await graphql.mutation(
    query: [:]
)

```
