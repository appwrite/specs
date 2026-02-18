```php
<?php

use Cloud\Platform\Client;
use Cloud\Platform\Services\Regions;
use Cloud\Platform\Enums\RequestMethod;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

$regions = new Regions($client);

$result = $regions->createExecution(
    deploymentId: '',
    responseStatusCode: 100,
    responseHeaders: [],
    responseSize: null,
    requestPath: '<REQUEST_PATH>',
    requestMethod: RequestMethod::GET(),
    requestHeaders: [],
    requestSize: null,
    errors: '<ERRORS>',
    logs: '<LOGS>',
    duration: null,
    projectId: '' // optional
);```
