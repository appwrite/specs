```dart
import 'package:appwrite/appwrite.dart';
import 'package:appwrite/enums.dart' as enums;

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Avatars avatars = Avatars(client);

 result = await avatars.getCreditCard(
    code: enums.CreditCard.americanExpress,
    width: 0, // optional
    height: 0, // optional
    quality: -1, // optional
);
```
