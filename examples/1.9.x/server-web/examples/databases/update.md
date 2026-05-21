```javascript
import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const databases = new Databases(client);

const result = await databases.update({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>', // optional
    enabled: false // optional
});

console.log(result);
```
