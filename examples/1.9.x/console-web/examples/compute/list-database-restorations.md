```javascript
import { Client, Compute, Status, Type } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.listDatabaseRestorations({
    databaseId: '<DATABASE_ID>',
    status: Status.Pending, // optional
    type: Type.Backup, // optional
    limit: 1, // optional
    offset: 0 // optional
});

console.log(result);
```
