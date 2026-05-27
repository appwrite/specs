```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Project project = Project(client);

PlatformAndroid result = await project.createAndroidPlatform(
    platformId: '<PLATFORM_ID>',
    name: '<NAME>',
    applicationId: '<APPLICATION_ID>',
);
```
