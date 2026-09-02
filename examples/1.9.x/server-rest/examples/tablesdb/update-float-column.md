```http
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/columns/float/{key} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "required": false,
  "min": 0,
  "max": 100,
  "default": 10.5,
  "newKey": "<NEW_KEY>"
}
```
