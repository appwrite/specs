```javascript
import { Client, Project, ProjectOAuth2GooglePrompt } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new Project(client);

const result = await project.updateOAuth2Google({
    clientId: '<CLIENT_ID>', // optional
    clientSecret: '<CLIENT_SECRET>', // optional
    prompt: [ProjectOAuth2GooglePrompt.None], // optional
    enabled: false // optional
});

console.log(result);
```
