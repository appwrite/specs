```http
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/columns/enum/{key} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "elements": ["active", "inactive"],
  "required": false,
  "default": "active",
  "newKey": "<NEW_KEY>"
}
```
