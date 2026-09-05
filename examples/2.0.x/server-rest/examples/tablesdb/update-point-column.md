```http
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/columns/point/{key} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "required": false,
  "default": [1, 2],
  "newKey": "<NEW_KEY>"
}
```
