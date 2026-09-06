```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Avatars avatars = Avatars(client);

 result = await avatars.getQR(
    text: '<TEXT>',
    size: 1, // optional
    margin: 0, // optional
    download: false, // optional
);
```
