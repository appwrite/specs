```javascript
import { Client, TablesDB, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tablesDB = new TablesDB(client);

const result = await tablesDB.updateTable({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    name: '<NAME>', // optional
    permissions: [Permission.read(Role.any())], // optional
    rowSecurity: false, // optional
    enabled: false, // optional
    purge: false // optional
});

console.log(result);
```
