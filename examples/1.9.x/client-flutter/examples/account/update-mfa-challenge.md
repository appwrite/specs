```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Account account = Account(client);

Session result = await account.updateMFAChallenge(
    challengeId: '<CHALLENGE_ID>',
    otp: '<OTP>',
);
```
