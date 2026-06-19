```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Usage usage = Usage(client);

UsageEventList result = await usage.listEvents(
    metric: '<METRIC>',
    resource: '<RESOURCE>', // (optional)
    resourceId: '<RESOURCE_ID>', // (optional)
    interval: '1m', // (optional)
    dimensions: [], // (optional)
    startAt: '2020-10-15T06:38:00.000+00:00', // (optional)
    endAt: '2020-10-15T06:38:00.000+00:00', // (optional)
    orderBy: 'time', // (optional)
    orderDir: 'asc', // (optional)
    limit: 1, // (optional)
    offset: 0, // (optional)
);
```
