```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setImpersonateUserId(''); // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

Avatars avatars = Avatars(client);

// Downloading file
Uint8List bytes = await avatars.getFavicon(
    url: 'https://example.com',
)

final file = File('path_to_file/filename.ext');
file.writeAsBytesSync(bytes);

// Displaying image preview
FutureBuilder(
    future: avatars.getFavicon(
    url:'https://example.com' ,
), // Works for both public file and private file, for private files you need to be logged in
    builder: (context, snapshot) {
      return snapshot.hasData && snapshot.data != null
          ? Image.memory(snapshot.data)
          : CircularProgressIndicator();
    }
);
```
