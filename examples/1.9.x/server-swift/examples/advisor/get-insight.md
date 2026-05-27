```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let advisor = Advisor(client)

let insight = try await advisor.getInsight(
    reportId: "<REPORT_ID>",
    insightId: "<INSIGHT_ID>"
)

```
