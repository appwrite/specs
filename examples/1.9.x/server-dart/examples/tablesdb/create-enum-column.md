```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

TablesDB tablesDB = TablesDB(client);

ColumnEnum result = await tablesDB.createEnumColumn(
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    key: '',
    elements: [],
    xrequired: false,
    xdefault: '<DEFAULT>', // (optional)
    array: false, // (optional)
);
```
