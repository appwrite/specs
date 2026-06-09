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

Storage storage = new Storage(client);

byte[] result = await storage.GetFilePreview(
    bucketId: "<BUCKET_ID>",
    fileId: "<FILE_ID>",
    width: 0, // optional
    height: 0, // optional
    gravity: ImageGravity.Center, // optional
    quality: -1, // optional
    borderWidth: 0, // optional
    borderColor: "", // optional
    borderRadius: 0, // optional
    opacity: 0, // optional
    rotation: -360, // optional
    background: "", // optional
    output: ImageFormat.Jpg, // optional
    token: "<TOKEN>" // optional
);```
