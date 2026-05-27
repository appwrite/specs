```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Sites sites = Sites(client);

Variable result = await sites.updateVariable(
    siteId: '<SITE_ID>',
    variableId: '<VARIABLE_ID>',
    key: '<KEY>', // (optional)
    value: '<VALUE>', // (optional)
    secret: false, // (optional)
);
```
