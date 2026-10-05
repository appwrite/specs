```java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Analytics;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

Analytics analytics = new Analytics(client);

analytics.createProperty(
    "<PROPERTY_ID>", // propertyId
    "<NAME>", // name
    "<DOMAIN>", // domain (optional)
    "<TIMEZONE>", // timezone (optional)
    false, // enabled (optional)
    false, // public (optional)
    List.of(), // allowedOrigins (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```
