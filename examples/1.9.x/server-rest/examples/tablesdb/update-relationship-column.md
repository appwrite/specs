```http
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/columns/{key}/relationship HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "onDelete": "cascade",
  "newKey": ""
}

{
  "onDelete": "cascade",
  "newKey": ""
}
```
