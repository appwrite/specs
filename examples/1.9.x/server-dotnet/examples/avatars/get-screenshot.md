```csharp
using Appwrite;
using Appwrite.Enums;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetSession("") // The user session to authenticate with
    .SetImpersonateUserId(""); // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

Avatars avatars = new Avatars(client);

byte[] result = await avatars.GetScreenshot(
    url: "https://example.com",
    headers: new {
        Authorization = "Bearer token123",
        X-Custom-Header = "value"
    }, // optional
    viewportWidth: 1920, // optional
    viewportHeight: 1080, // optional
    scale: 2, // optional
    theme: BrowserTheme.Dark, // optional
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15", // optional
    fullpage: true, // optional
    locale: "en-US", // optional
    timezone: Timezone.AfricaAbidjan, // optional
    latitude: 37.7749, // optional
    longitude: -122.4194, // optional
    accuracy: 100, // optional
    touch: true, // optional
    permissions: new List&lt;BrowserPermission&gt; { BrowserPermission.Geolocation, BrowserPermission.Notifications }, // optional
    sleep: 3, // optional
    width: 800, // optional
    height: 600, // optional
    quality: 85, // optional
    output: ImageFormat.Jpeg // optional
);```
