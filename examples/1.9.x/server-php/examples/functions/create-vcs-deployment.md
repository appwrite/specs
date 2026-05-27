```php
<?php

use Appwrite\Client;
use Appwrite\Services\Functions;
use Appwrite\Enums\VCSReferenceType;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$functions = new Functions($client);

$result = $functions->createVcsDeployment(
    functionId: '<FUNCTION_ID>',
    type: VCSReferenceType::BRANCH(),
    reference: '<REFERENCE>',
    activate: false // optional
);```
