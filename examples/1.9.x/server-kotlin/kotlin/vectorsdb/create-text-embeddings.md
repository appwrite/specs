```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.VectorsDB
import io.appwrite.enums.EmbeddingModel

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val vectorsDB = VectorsDB(client)

val response = vectorsDB.createTextEmbeddings(
    texts = listOf(),
    model = EmbeddingModel.NOMIC_EMBED_TEXT // optional
)
```
