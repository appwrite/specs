```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Project project = Project(client);

OAuth2Stripe result = await project.updateOAuth2Stripe(
    clientId: '<CLIENT_ID>', // (optional)
    apiSecretKey: '<API_SECRET_KEY>', // (optional)
    enabled: false, // (optional)
);
```
