```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.listDatabaseLogs({
    databaseId: '<DATABASE_ID>',
    startTime: '<START_TIME>', // optional
    endTime: '<END_TIME>', // optional
    limit: 1 // optional
});

console.log(result);
```
