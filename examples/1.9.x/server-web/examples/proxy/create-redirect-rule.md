```javascript
import { Client, Proxy, StatusCode, ProxyResourceType } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const proxy = new Proxy(client);

const result = await proxy.createRedirectRule({
    domain: '',
    url: 'https://example.com',
    statusCode: StatusCode.MovedPermanently301,
    resourceId: '<RESOURCE_ID>',
    resourceType: ProxyResourceType.Site
});

console.log(result);
```
