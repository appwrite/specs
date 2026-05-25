```javascript
import { Client, Storage, Compression, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const storage = new Storage(client);

const result = await storage.createBucket({
    bucketId: '<BUCKET_ID>',
    name: '<NAME>',
    permissions: [Permission.read(Role.any())], // optional
    fileSecurity: false, // optional
    enabled: false, // optional
    maximumFileSize: 1, // optional
    allowedFileExtensions: [], // optional
    compression: Compression.None, // optional
    encryption: false, // optional
    antivirus: false, // optional
    transformations: false // optional
});

console.log(result);
```
