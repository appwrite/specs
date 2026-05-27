```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let tablesDB = TablesDB(client)

let row = try await tablesDB.decrementRowColumn(
    databaseId: "<DATABASE_ID>",
    tableId: "<TABLE_ID>",
    rowId: "<ROW_ID>",
    column: "",
    value: 0, // optional
    min: 0, // optional
    transactionId: "<TRANSACTION_ID>" // optional
)

```
