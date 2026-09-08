```http
POST /v1/documentsdb/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "documentId": "<DOCUMENT_ID>",
  "data": {
    "username": "walter.obrien",
    "email": "walter.obrien@example.com",
    "fullName": "Walter O'Brien",
    "age": 30,
    "isAdmin": false
  },
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```
