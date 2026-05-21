```javascript
import { Client, Compute, Range } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.getDatabaseUsage({
    databaseId: '<DATABASE_ID>',
    range: Range.TwentyFourHours // optional
});

console.log(result);
```
