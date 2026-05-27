```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.getDatabaseUsage({
    databaseId: '<DATABASE_ID>',
    range: '24h' // optional
});

console.log(result);
```
