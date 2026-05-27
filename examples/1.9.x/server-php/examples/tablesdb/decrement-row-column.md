```php
<?php

use Appwrite\Client;
use Appwrite\Services\TablesDB;

$client = (new Client())
    ->setEndpoint('') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$tablesDB = new TablesDB($client);

$result = $tablesDB->decrementRowColumn(
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    rowId: '<ROW_ID>',
    column: '',
    value: null, // optional
    min: null, // optional
    transactionId: '<TRANSACTION_ID>' // optional
);```
