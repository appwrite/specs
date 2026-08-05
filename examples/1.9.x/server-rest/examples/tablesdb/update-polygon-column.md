```http
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/columns/polygon/{key} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "required": false,
  "default": [[[1, 2], [3, 4], [5, 6], [1, 2]]],
  "newKey": ""
}

{
  "required": false,
  "default": [[[1, 2], [3, 4], [5, 6], [1, 2]]],
  "newKey": ""
}
```
