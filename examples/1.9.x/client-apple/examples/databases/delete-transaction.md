```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let databases = Databases(client)

let result = try await databases.deleteTransaction(
    transactionId: "<TRANSACTION_ID>"
)

```
