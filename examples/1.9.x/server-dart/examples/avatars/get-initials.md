```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

Avatars avatars = Avatars(client);

Uint8List result = await avatars.getInitials(
    name: '<NAME>', // (optional)
    width: 0, // (optional)
    height: 0, // (optional)
    background: '', // (optional)
);
```
