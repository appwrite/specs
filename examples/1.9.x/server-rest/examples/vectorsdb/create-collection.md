```http
POST /v1/vectorsdb/{databaseId}/collections HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "collectionId": "<COLLECTION_ID>",
  "name": "<NAME>",
  "dimension": 1,
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false
}

{
  "collectionId": "<COLLECTION_ID>",
  "name": "<NAME>",
  "dimension": 1,
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false
}
```
