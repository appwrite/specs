```javascript
import { Client, Advisor } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const advisor = new Advisor(client);

const result = await advisor.getReport({
    reportId: '<REPORT_ID>'
});

console.log(result);
```
