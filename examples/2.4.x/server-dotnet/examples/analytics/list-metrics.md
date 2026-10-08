```csharp
using Appwrite;
using Appwrite.Enums;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Analytics analytics = new Analytics(client);

Appwrite.Models.AnalyticsMetricList result = await analytics.ListMetrics(
    propertyId: "<PROPERTY_ID>",
    queries: new List<string>(), // optional
    interval: AnalyticsInterval.OneHour, // optional
    dimensions: new List&lt;AnalyticsDimension&gt; { AnalyticsDimension.Country }, // optional
    dateRange: "<DATE_RANGE>", // optional
    startAt: "2020-10-15T06:38:00.000+00:00", // optional
    endAt: "2020-10-15T06:38:00.000+00:00", // optional
    limit: 1 // optional
);

```
