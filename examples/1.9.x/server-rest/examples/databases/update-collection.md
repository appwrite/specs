```http
PUT /v1/databases/{databaseId}/collections/{collectionId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false,
  "purge": false
}

{
  "name": "<NAME>",
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false,
  "purge": false
}
```
