```php
<?php

use Cloud\Platform\Client;
use Cloud\Platform\Services\Manager;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

$manager = new Manager($client);

$result = $manager->getDomainZone(
    domain: ''
);```
