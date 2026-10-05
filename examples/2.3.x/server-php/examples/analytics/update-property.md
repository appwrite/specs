```php
<?php

use Appwrite\Client;
use Appwrite\Services\Analytics;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$analytics = new Analytics($client);

$result = $analytics->updateProperty(
    propertyId: '<PROPERTY_ID>',
    name: '<NAME>', // optional
    domain: '<DOMAIN>', // optional
    timezone: '<TIMEZONE>', // optional
    enabled: false, // optional
    public: false, // optional
    allowedOrigins: [] // optional
);
```
