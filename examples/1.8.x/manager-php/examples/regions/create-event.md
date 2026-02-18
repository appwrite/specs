```php
<?php

use Cloud\Platform\Client;
use Cloud\Platform\Services\Regions;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

$regions = new Regions($client);

$result = $regions->createEvent(
    type: '<TYPE>',
    subject: '<SUBJECT>',
    data: [],
    specversion: '<SPECVERSION>', // optional
    source: '<SOURCE>', // optional
    id: '<ID>', // optional
    time: '<TIME>', // optional
    datacontenttype: '<DATACONTENTTYPE>' // optional
);```
