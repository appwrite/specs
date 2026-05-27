```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Usage usage = Usage(client);

UsageGaugeList result = await usage.listGauges(
    queries: [], // (optional)
    total: false, // (optional)
);
```
