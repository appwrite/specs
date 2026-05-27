```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let tablesDB = TablesDB(client)

let result = try await tablesDB.deleteTransaction(
    transactionId: "<TRANSACTION_ID>"
)

```
