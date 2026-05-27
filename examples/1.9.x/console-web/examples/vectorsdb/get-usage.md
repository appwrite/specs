```javascript
import { Client, VectorsDB, UsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.getUsage({
    databaseId: '<DATABASE_ID>',
    range: UsageRange.TwentyFourHours // optional
});

console.log(result);
```
