```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let tablesDB = TablesDB(client)

let database = try await tablesDB.update(
    databaseId: "<DATABASE_ID>",
    name: "<NAME>", // optional
    enabled: false // optional
)

```
