```php
<?php

use Appwrite\Client;
use Appwrite\Services\Account;
use Appwrite\Enums\OAuthProvider;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$account = new Account($client);

$result = $account->createIdTokenSession(
    provider: OAuthProvider::AMAZON(),
    idToken: '<ID_TOKEN>',
    nonce: '<NONCE>', // optional
    accessToken: '<ACCESS_TOKEN>', // optional
    accessTokenExpiry: 0, // optional
    name: '<NAME>' // optional
);
```
