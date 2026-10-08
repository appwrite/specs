```http
POST /v1/tablesdb/{databaseId}/tables/{tableId}/indexes HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.4.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "key": "<KEY>",
  "type": "key",
  "columns": ["username"],
  "orders": [],
  "lengths": []
}
```
