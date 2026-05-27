```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Account account = Account(client);

User result = await account.updatePrefs(
    prefs: {
        "language": "en",
        "timezone": "UTC",
        "darkTheme": true
    },
);
```
