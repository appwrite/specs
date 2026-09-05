```http
PUT /v1/tablesdb/{databaseId}/tables/{tableId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "permissions": ["read(\"any\")"],
  "rowSecurity": false,
  "enabled": false,
  "purge": false
}
```
