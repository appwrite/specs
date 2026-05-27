```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

TablesDB tablesDB = TablesDB(client);

Transaction result = await tablesDB.updateTransaction(
    transactionId: '<TRANSACTION_ID>',
    commit: false, // optional
    rollback: false, // optional
);
```
