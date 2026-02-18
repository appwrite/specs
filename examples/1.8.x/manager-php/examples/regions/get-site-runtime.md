```php
<?php

use Cloud\Platform\Client;
use Cloud\Platform\Services\Regions;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

$regions = new Regions($client);

$result = $regions->getSiteRuntime(
    siteId: '',
    projectId: '' // optional
);```
