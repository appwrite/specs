```javascript
import { Client, Compute, Type } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabaseBackup({
    databaseId: '<DATABASE_ID>',
    type: Type.Full // optional
});

console.log(result);
```
