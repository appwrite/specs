```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

TablesDB tablesDB = TablesDB(client);

ColumnLine result = await tablesDB.createLineColumn(
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    key: '',
    xrequired: false,
    xdefault: [[1, 2], [3, 4], [5, 6]], // (optional)
);
```
