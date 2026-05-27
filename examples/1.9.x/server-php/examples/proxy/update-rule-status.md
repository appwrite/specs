```php
<?php

use Appwrite\Client;
use Appwrite\Services\Proxy;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$proxy = new Proxy($client);

$result = $proxy->updateRuleStatus(
    ruleId: '<RULE_ID>'
);```
