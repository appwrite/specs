```csharp
using Appwrite;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Usage usage = new Usage(client);

UsageGaugeList result = await usage.ListGauges(
    metric: "<METRIC>",
    resourceId: "<RESOURCE_ID>", // optional
    teamId: "<TEAM_ID>", // optional
    interval: "1m", // optional
    dimensions: new List<string>(), // optional
    startAt: "2020-10-15T06:38:00.000+00:00", // optional
    endAt: "2020-10-15T06:38:00.000+00:00", // optional
    orderBy: "time", // optional
    orderDir: "asc", // optional
    limit: 1, // optional
    offset: 0 // optional
);```
