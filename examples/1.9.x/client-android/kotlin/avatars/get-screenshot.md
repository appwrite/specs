```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars
import io.appwrite.enums.BrowserTheme
import io.appwrite.enums.Timezone
import io.appwrite.enums.BrowserPermission
import io.appwrite.enums.ImageFormat

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setImpersonateUserId("") // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

val avatars = Avatars(client)

val result = avatars.getScreenshot(
    url = "https://example.com", 
    headers = mapOf(
        "Authorization" to "Bearer token123",
        "X-Custom-Header" to "value"
    ), // (optional)
    viewportWidth = 1920, // (optional)
    viewportHeight = 1080, // (optional)
    scale = 2, // (optional)
    theme = BrowserTheme.LIGHT, // (optional)
    userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15", // (optional)
    fullpage = true, // (optional)
    locale = "en-US", // (optional)
    timezone = Timezone.AFRICA_ABIDJAN, // (optional)
    latitude = 37.7749, // (optional)
    longitude = -122.4194, // (optional)
    accuracy = 100, // (optional)
    touch = true, // (optional)
    permissions = BrowserPermission.GEOLOCATION, // (optional)
    sleep = 3, // (optional)
    width = 800, // (optional)
    height = 600, // (optional)
    quality = 85, // (optional)
    output = ImageFormat.JPG, // (optional)
)
```
