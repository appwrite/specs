```javascript
import { Client, Console } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const xconsole = new Console(client);

const result = await xconsole.getCampaign({
    campaignId: '<CAMPAIGN_ID>'
});

console.log(result);
```
