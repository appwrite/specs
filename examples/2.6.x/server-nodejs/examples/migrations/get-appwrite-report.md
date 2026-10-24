```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const migrations = new sdk.Migrations(client);

const result = await migrations.getAppwriteReport({
    resources: [sdk.AppwriteMigrationResource.User],
    endpoint: 'https://example.com',
    projectID: '<PROJECT_ID>',
    key: '<KEY>',
});
```
