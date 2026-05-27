```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

TablesDB tablesDB = TablesDB(client);

TableList result = await tablesDB.listTables(
    databaseId: '<DATABASE_ID>',
    queries: [], // (optional)
    search: '<SEARCH>', // (optional)
    total: false, // (optional)
);
```
