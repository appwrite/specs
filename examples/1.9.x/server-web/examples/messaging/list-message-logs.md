```javascript
import { Client, Messaging } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new Messaging(client);

const result = await messaging.listMessageLogs({
    messageId: '<MESSAGE_ID>',
    queries: [], // optional
    total: false // optional
});

console.log(result);
```
