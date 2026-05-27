```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let tablesDB = TablesDB(client)

let transactionList = try await tablesDB.listTransactions(
    queries: [] // optional
)

```
