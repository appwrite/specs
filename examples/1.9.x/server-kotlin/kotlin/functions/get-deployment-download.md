```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Functions
import io.appwrite.enums.DeploymentDownloadType

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key
    .setImpersonateUserId("") // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

val functions = Functions(client)

val result = functions.getDeploymentDownload(
    functionId = "<FUNCTION_ID>",
    deploymentId = "<DEPLOYMENT_ID>",
    type = DeploymentDownloadType.SOURCE // optional
)
```
