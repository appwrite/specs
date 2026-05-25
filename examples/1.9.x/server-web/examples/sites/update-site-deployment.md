```javascript
import { Client, Sites } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const sites = new Sites(client);

const result = await sites.updateSiteDeployment({
    siteId: '<SITE_ID>',
    deploymentId: '<DEPLOYMENT_ID>'
});

console.log(result);
```
