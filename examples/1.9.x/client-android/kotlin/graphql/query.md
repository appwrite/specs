```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Graphql

val client = Client(context)
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

val graphql = Graphql(client)

val result = graphql.query(
    query = mapOf( "a" to "b" ), 
)
```
