```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

Teams teams = Teams(client);

Preferences result = await teams.getPrefs(
    teamId: '<TEAM_ID>',
);
```
