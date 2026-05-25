```javascript
import { Client, Functions } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new Functions(client);

const result = await functions.getExecution({
    functionId: '<FUNCTION_ID>',
    executionId: '<EXECUTION_ID>'
});

console.log(result);
```
