```http
PUT /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "data": {
    "username": "walter.obrien",
    "email": "walter.obrien@example.com",
    "fullName": "Walter O'Brien",
    "age": 33,
    "isAdmin": false
  },
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```
