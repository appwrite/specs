```javascript
import { Client, Proxy } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const proxy = new Proxy(client);

const result = await proxy.createFunctionRule({
    domain: '',
    functionId: '<FUNCTION_ID>',
    branch: '<BRANCH>' // optional
});

console.log(result);
```
