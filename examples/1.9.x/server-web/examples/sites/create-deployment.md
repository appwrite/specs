```javascript
import { Client, Sites } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const sites = new Sites(client);

const result = await sites.createDeployment({
    siteId: '<SITE_ID>',
    code: document.getElementById('uploader').files[0],
    installCommand: '<INSTALL_COMMAND>', // optional
    buildCommand: '<BUILD_COMMAND>', // optional
    outputDirectory: '<OUTPUT_DIRECTORY>', // optional
    activate: false // optional
});

console.log(result);
```
