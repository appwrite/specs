```csharp
using Appwrite;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Analytics analytics = new Analytics(client);

Appwrite.Models.AnalyticsProperty result = await analytics.UpdateProperty(
    propertyId: "<PROPERTY_ID>",
    name: "<NAME>", // optional
    domain: "<DOMAIN>", // optional
    timezone: "<TIMEZONE>", // optional
    enabled: false, // optional
    public: false, // optional
    allowedOrigins: new List<string>() // optional
);

```
