```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars

val client = Client(context)
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

val avatars = Avatars(client)

val result = avatars.getImage(
    url = "https://example.com", 
    width = 0, // (optional)
    height = 0, // (optional)
)
```
