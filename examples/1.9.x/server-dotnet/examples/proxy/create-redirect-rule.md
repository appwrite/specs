```csharp
using Appwrite;
using Appwrite.Enums;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Proxy proxy = new Proxy(client);

ProxyRule result = await proxy.CreateRedirectRule(
    domain: "",
    url: "https://example.com",
    statusCode: RedirectStatusCode.MovedPermanently,
    resourceId: "<RESOURCE_ID>",
    resourceType: ProxyResourceType.Site
);```
