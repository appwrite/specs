```http
POST /v1/tablesdb/{databaseId}/tables/{tableId}/columns/line HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "key": "<KEY>",
  "required": false,
  "default": [[1, 2], [3, 4], [5, 6]]
}
```
