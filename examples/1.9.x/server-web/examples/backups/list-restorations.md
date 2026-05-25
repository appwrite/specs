```javascript
import { Client, Backups } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const backups = new Backups(client);

const result = await backups.listRestorations({
    queries: [] // optional
});

console.log(result);
```
