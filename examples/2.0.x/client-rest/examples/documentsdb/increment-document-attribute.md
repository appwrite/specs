```http
PATCH /v1/documentsdb/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "value": 1,
  "max": 100,
  "transactionId": "<TRANSACTION_ID>"
}
```
