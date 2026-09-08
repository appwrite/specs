```http
POST /v1/vectorsdb/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "documentId": "<DOCUMENT_ID>",
  "data": {
  "embeddings": [
      0.12,
      -0.55,
      0.88,
      1.02
  ],
  "metadata": {
      "key": "value"
  }
  },
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```
