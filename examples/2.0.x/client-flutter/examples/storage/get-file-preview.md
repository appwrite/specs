```dart
import 'package:appwrite/appwrite.dart';
import 'package:appwrite/enums.dart' as enums;

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

Storage storage = Storage(client);

 result = await storage.getFilePreview(
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>',
    width: 0, // optional
    height: 0, // optional
    gravity: enums.ImageGravity.center, // optional
    quality: -1, // optional
    borderWidth: 0, // optional
    borderColor: 'FFFFFF', // optional
    borderRadius: 0, // optional
    opacity: 0, // optional
    rotation: -360, // optional
    background: 'FFFFFF', // optional
    output: enums.ImageFormat.jpg, // optional
    token: '<TOKEN>', // optional
);
```
