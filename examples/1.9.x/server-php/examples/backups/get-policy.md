```php
<?php

use Appwrite\Client;
use Appwrite\Services\Backups;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$backups = new Backups($client);

$result = $backups->getPolicy(
    policyId: '<POLICY_ID>'
);```
