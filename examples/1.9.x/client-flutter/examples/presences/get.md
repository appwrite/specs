```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Presences presences = Presences(client);

Presence result = await presences.get(
    presenceId: '<PRESENCE_ID>',
);
```
