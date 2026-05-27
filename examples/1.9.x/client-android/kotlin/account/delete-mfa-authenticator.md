```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Account
import io.appwrite.enums.AuthenticatorType

val client = Client(context)
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

val account = Account(client)

val result = account.deleteMFAAuthenticator(
    type = AuthenticatorType.TOTP,
)
```
