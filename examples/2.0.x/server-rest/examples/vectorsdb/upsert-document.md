```http
PUT /v1/vectorsdb/{databaseId}/collections/{collectionId}/documents/{documentId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "data": {},
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```
