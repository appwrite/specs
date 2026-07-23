```http
PUT /v1/vectorsdb/{databaseId}/collections/{collectionId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "dimension": 1,
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false
}

{
  "name": "<NAME>",
  "dimension": 1,
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false
}
```
