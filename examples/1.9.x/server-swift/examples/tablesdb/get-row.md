```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

let tablesDB = TablesDB(client)

let row = try await tablesDB.getRow(
    databaseId: "<DATABASE_ID>",
    tableId: "<TABLE_ID>",
    rowId: "<ROW_ID>",
    queries: [], // optional
    transactionId: "<TRANSACTION_ID>" // optional
)

```
