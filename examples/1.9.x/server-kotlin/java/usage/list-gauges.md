```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Usage;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Usage usage = new Usage(client);

usage.listGauges(
    List.of(), // metrics
    "<RESOURCE_ID>", // resourceId (optional)
    "<TEAM_ID>", // teamId (optional)
    "1m", // interval (optional)
    List.of(), // dimensions (optional)
    "2020-10-15T06:38:00.000+00:00", // startAt (optional)
    "2020-10-15T06:38:00.000+00:00", // endAt (optional)
    "time", // orderBy (optional)
    "asc", // orderDir (optional)
    1, // limit (optional)
    0, // offset (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```
