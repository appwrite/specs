```javascript
import { Client, Activities } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const activities = new Activities(client);

const result = await activities.listEvents({
    queries: '' // optional
});

console.log(result);
```
