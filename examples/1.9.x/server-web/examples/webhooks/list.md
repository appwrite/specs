```javascript
import { Client, Webhooks } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const webhooks = new Webhooks(client);

const result = await webhooks.list({
    queries: [], // optional
    total: false // optional
});

console.log(result);
```
