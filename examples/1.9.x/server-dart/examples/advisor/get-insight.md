```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Advisor advisor = Advisor(client);

Insight result = await advisor.getInsight(
    reportId: '<REPORT_ID>',
    insightId: '<INSIGHT_ID>',
);
```
