```dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Project project = Project(client);

PlatformApple result = await project.updateApplePlatform(
    platformId: '<PLATFORM_ID>',
    name: '<NAME>',
    bundleIdentifier: '<BUNDLE_IDENTIFIER>',
);
```
