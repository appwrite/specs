```javascript
import { Client, Compute, Period } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.getDatabaseMetrics({
    databaseId: '<DATABASE_ID>',
    period: Period.OneHour // optional
});

console.log(result);
```
