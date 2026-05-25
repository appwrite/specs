```javascript
import { Client, Databases, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const databases = new Databases(client);

const result = await databases.updateCollection({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    name: '<NAME>', // optional
    permissions: [Permission.read(Role.any())], // optional
    documentSecurity: false, // optional
    enabled: false, // optional
    purge: false // optional
});

console.log(result);
```
