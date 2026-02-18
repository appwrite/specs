```php
<?php

use Cloud\Platform\Client;
use Cloud\Platform\Services\Manager;
use Cloud\Platform\Enums\ResourceType;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

$manager = new Manager($client);

$result = $manager->createBlock(
    projectId: '<PROJECT_ID>',
    resourceType: ResourceType::PROJECTS(),
    resourceId: '<RESOURCE_ID>', // optional
    reason: '<REASON>', // optional
    expiredAt: '' // optional
);```
