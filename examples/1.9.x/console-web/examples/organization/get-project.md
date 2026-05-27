```javascript
import { Client, Organization } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organization = new Organization(client);

const result = await organization.getProject({
    projectId: '<PROJECT_ID>'
});

console.log(result);
```
