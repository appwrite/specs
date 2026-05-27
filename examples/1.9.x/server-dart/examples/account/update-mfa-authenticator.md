```dart
import 'package:dart_appwrite/dart_appwrite.dart';
import 'package:dart_appwrite/enums.dart' as enums;

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

Account account = Account(client);

User result = await account.updateMFAAuthenticator(
    type: enums.AuthenticatorType.totp,
    otp: '<OTP>',
);
```
