```javascript
import { Client, Teams } from "appwrite";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const teams = new Teams(client);

const result = await teams.get({
    teamId: '<TEAM_ID>'
});

console.log(result);
```
