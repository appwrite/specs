```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Proxy proxy = Proxy(client);

ProxyRuleList result = await proxy.listRules(
    queries: [], // (optional)
    total: false, // (optional)
);
```
