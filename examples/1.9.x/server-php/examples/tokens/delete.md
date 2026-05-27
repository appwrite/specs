```php
<?php

use Appwrite\Client;
use Appwrite\Services\Tokens;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$tokens = new Tokens($client);

$result = $tokens->delete(
    tokenId: '<TOKEN_ID>'
);```
