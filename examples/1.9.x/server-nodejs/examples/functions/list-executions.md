```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new sdk.Functions(client);

const result = await functions.listExecutions({
    functionId: '<FUNCTION_ID>',
    queries: [], // optional
    total: false // optional
});
```
