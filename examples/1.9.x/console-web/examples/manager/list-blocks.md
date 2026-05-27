```javascript
import { Client, Manager } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint

const manager = new Manager(client);

const result = await manager.listBlocks({
    projectId: '<PROJECT_ID>'
});

console.log(result);
```
