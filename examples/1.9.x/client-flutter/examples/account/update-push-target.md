```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Account account = Account(client);

Target result = await account.updatePushTarget(
    targetId: '<TARGET_ID>',
    identifier: '<IDENTIFIER>',
);
```
