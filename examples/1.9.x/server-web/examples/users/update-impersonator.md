```javascript
import { Client, Users } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const users = new Users(client);

const result = await users.updateImpersonator({
    userId: '<USER_ID>',
    impersonator: false
});

console.log(result);
```
