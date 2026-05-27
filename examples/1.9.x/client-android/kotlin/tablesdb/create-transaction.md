```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.TablesDB

val client = Client(context)
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

val tablesDB = TablesDB(client)

val result = tablesDB.createTransaction(
    ttl = 60, // (optional)
)
```
