```javascript
import { Client, TablesDB } from "appwrite";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.listTransactions({
    queries: [] // optional
});

console.log(result);
```
