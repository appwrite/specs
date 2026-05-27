```javascript
import { Client, TablesDB } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.getTransaction({
    transactionId: '<TRANSACTION_ID>'
});

console.log(result);
```
