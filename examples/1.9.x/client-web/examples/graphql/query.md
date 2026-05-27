```javascript
import { Client, Graphql } from "appwrite";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const graphql = new Graphql(client);

const result = await graphql.query({
    query: {}
});

console.log(result);
```
