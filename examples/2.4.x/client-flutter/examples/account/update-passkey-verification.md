```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Account account = Account(client);

Passkey result = await account.updatePasskeyVerification(
    passkeyId: '<PASSKEY_ID>',
    credential: {},
);
```
