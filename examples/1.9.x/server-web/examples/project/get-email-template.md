```javascript
import { Client, Project, ProjectEmailTemplateId, ProjectEmailTemplateLocale } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const project = new Project(client);

const result = await project.getEmailTemplate({
    templateId: ProjectEmailTemplateId.Verification,
    locale: ProjectEmailTemplateLocale.Af // optional
});

console.log(result);
```
