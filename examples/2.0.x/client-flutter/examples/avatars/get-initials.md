```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Avatars avatars = Avatars(client);

 result = await avatars.getInitials(
    name: '<NAME>', // optional
    width: 0, // optional
    height: 0, // optional
    background: 'FFFFFF', // optional
);
```
