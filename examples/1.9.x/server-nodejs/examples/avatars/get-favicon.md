```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const avatars = new sdk.Avatars(client);

const result = await avatars.getFavicon({
    url: 'https://example.com'
});
```
