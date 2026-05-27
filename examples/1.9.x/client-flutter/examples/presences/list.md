```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Presences presences = Presences(client);

PresenceList result = await presences.list(
    queries: [], // optional
    total: false, // optional
    ttl: 0, // optional
);
```
