```php
<?php

use Appwrite\Client;
use Appwrite\Services\Teams;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$teams = new Teams($client);

$result = $teams->list(
    queries: [], // optional
    search: '<SEARCH>', // optional
    total: false // optional
);```
