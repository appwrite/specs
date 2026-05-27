```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

let databases = Databases(client)

let document = try await databases.incrementDocumentAttribute(
    databaseId: "<DATABASE_ID>",
    collectionId: "<COLLECTION_ID>",
    documentId: "<DOCUMENT_ID>",
    attribute: "",
    value: 0, // optional
    max: 0, // optional
    transactionId: "<TRANSACTION_ID>" // optional
)

```
