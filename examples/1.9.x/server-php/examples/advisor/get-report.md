```php
<?php

use Appwrite\Client;
use Appwrite\Services\Advisor;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$advisor = new Advisor($client);

$result = $advisor->getReport(
    reportId: '<REPORT_ID>'
);```
