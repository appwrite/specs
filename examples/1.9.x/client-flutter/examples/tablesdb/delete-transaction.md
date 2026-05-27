```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

TablesDB tablesDB = TablesDB(client);

await tablesDB.deleteTransaction(
    transactionId: '<TRANSACTION_ID>',
);
```
