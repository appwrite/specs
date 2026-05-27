```javascript
import { Client, Organization } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organization = new Organization(client);

const result = await organization.updateProject({
    projectId: '<PROJECT_ID>',
    name: '<NAME>'
});

console.log(result);
```
