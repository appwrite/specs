```dart
import 'package:appwrite/appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Storage storage = Storage(client);

await storage.deleteFile(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
);
```
