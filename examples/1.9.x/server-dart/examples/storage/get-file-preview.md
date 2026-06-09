```dart
import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart' as enums;

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession('') // The user session to authenticate with
    .setImpersonateUserId(''); // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

Storage storage = Storage(client);

Uint8List result = await storage.getFilePreview(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    width: 0, // (optional)
    height: 0, // (optional)
    gravity: enums.ImageGravity.center, // (optional)
    quality: -1, // (optional)
    borderWidth: 0, // (optional)
    borderColor: '', // (optional)
    borderRadius: 0, // (optional)
    opacity: 0, // (optional)
    rotation: -360, // (optional)
    background: '', // (optional)
    output: enums.ImageFormat.jpg, // (optional)
    token: '<TOKEN>', // (optional)
);
```
