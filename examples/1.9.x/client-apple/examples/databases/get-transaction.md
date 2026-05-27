```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let databases = Databases(client)

let transaction = try await databases.getTransaction(
    transactionId: "<TRANSACTION_ID>"
)

```
