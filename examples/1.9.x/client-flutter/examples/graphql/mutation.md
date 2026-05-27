```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Graphql graphql = Graphql(client);

Any result = await graphql.mutation(
    query: {},
);
```
