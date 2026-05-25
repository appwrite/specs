```javascript
import { Client, Locale } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const locale = new Locale(client);

const result = await locale.listCountriesPhones();

console.log(result);
```
