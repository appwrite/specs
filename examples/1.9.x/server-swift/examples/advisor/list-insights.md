```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let advisor = Advisor(client)

let insightList = try await advisor.listInsights(
    reportId: "<REPORT_ID>",
    queries: [], // optional
    total: false // optional
)

```
