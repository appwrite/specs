```javascript
import { Client, Health } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const health = new Health(client);

const result = await health.getQueueDatabases({
    name: '<NAME>', // optional
    threshold: null // optional
});

console.log(result);
```
