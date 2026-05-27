```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Project project = Project(client);

OAuth2Dropbox result = await project.updateOAuth2Dropbox(
    appKey: '<APP_KEY>', // (optional)
    appSecret: '<APP_SECRET>', // (optional)
    enabled: false, // (optional)
);
```
