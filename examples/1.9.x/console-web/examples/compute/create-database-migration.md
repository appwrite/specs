```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabaseMigration({
    databaseId: '<DATABASE_ID>',
    targetType: 'shared'
});

console.log(result);
```
