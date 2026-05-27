```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let databases = Databases(client)

let transactionList = try await databases.listTransactions(
    queries: [] // optional
)

```
