```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const account = new sdk.Account(client);

const result = await account.createMFAChallenge({
    factor: sdk.AuthenticationFactor.Email
});
```
