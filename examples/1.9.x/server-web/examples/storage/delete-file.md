```javascript
import { Client, Storage } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const result = await storage.deleteFile({
    bucketId: '<BUCKET_ID>',
    fileId: '<FILE_ID>'
});

console.log(result);
```
