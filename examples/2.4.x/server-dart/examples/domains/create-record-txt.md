```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Domains domains = Domains(client);

DnsRecord result = await domains.createRecordTXT(
    domainId: '<DOMAIN_ID>',
    name: '',
    ttl: 1,
    value: '<VALUE>', // (optional)
    comment: '<COMMENT>', // (optional)
);
```
