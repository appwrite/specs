```http
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "value": 0,
  "max": 0,
  "transactionId": "<TRANSACTION_ID>"
}

{
  "value": 0,
  "max": 0,
  "transactionId": "<TRANSACTION_ID>"
}
```
