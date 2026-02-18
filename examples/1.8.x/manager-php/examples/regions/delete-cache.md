```php
<?php

use Cloud\Platform\Client;
use Cloud\Platform\Services\Regions;
use Cloud\Platform\Enums\CollectionId;
use Cloud\Platform\Enums\Region;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject(''); // 

$regions = new Regions($client);

$result = $regions->deleteCache(
    documentId: '<DOCUMENT_ID>',
    collectionId: CollectionId::PROJECTS(),
    region: Region::FRA()
);```
