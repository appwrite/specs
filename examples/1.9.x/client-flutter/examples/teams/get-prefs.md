```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Teams teams = Teams(client);

Preferences result = await teams.getPrefs(
    teamId: '<TEAM_ID>',
);
```
