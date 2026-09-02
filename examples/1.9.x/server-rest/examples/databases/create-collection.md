```http
POST /v1/databases/{databaseId}/collections HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "collectionId": "<COLLECTION_ID>",
  "name": "<NAME>",
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false,
  "attributes": [],
  "indexes": []
}
```
