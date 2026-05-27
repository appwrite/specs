```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new sdk.Functions(client);

const result = await functions.getExecution({
    functionId: '<FUNCTION_ID>',
    executionId: '<EXECUTION_ID>'
});
```
