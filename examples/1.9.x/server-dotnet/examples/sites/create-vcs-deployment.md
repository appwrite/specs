```csharp
using Appwrite;
using Appwrite.Enums;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Sites sites = new Sites(client);

Deployment result = await sites.CreateVcsDeployment(
    siteId: "<SITE_ID>",
    type: VCSReferenceType.Branch,
    reference: "<REFERENCE>",
    activate: false // optional
);```
