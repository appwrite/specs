```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Databases

val client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val databases = Databases(client)

val response = databases.incrementDocumentAttribute(
    databaseId = "<DATABASE_ID>",
    collectionId = "<COLLECTION_ID>",
    documentId = "<DOCUMENT_ID>",
    attribute = "",
    value = 0, // optional
    max = 0, // optional
    transactionId = "<TRANSACTION_ID>" // optional
)
```
