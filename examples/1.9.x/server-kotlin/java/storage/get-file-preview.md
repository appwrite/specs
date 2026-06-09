```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Storage;
import io.appwrite.enums.ImageGravity;
import io.appwrite.enums.ImageFormat;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with
    .setImpersonateUserId(""); // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

Storage storage = new Storage(client);

storage.getFilePreview(
    "<BUCKET_ID>", // bucketId
    "<FILE_ID>", // fileId
    0, // width (optional)
    0, // height (optional)
    ImageGravity.CENTER, // gravity (optional)
    -1, // quality (optional)
    0, // borderWidth (optional)
    "", // borderColor (optional)
    0, // borderRadius (optional)
    0, // opacity (optional)
    -360, // rotation (optional)
    "", // background (optional)
    ImageFormat.JPG, // output (optional)
    "<TOKEN>", // token (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```
