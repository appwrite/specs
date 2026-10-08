```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Analytics;
import io.appwrite.enums.AnalyticsInterval;
import io.appwrite.enums.AnalyticsDimension;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Analytics analytics = new Analytics(client);

analytics.listMetrics(
    "<PROPERTY_ID>", // propertyId
    List.of(), // queries (optional)
    AnalyticsInterval.ONE_HOUR, // interval (optional)
    List.of(AnalyticsDimension.COUNTRY), // dimensions (optional)
    "<DATE_RANGE>", // dateRange (optional)
    "2020-10-15T06:38:00.000+00:00", // startAt (optional)
    "2020-10-15T06:38:00.000+00:00", // endAt (optional)
    1L, // limit (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```
