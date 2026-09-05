```http
PATCH /v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "value": 1,
  "min": 0,
  "transactionId": "<TRANSACTION_ID>"
}
```
