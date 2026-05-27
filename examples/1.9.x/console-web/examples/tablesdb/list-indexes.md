```javascript
import { Client, TablesDB } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.listIndexes({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    queries: [], // optional
    total: false // optional
});

console.log(result);
```
