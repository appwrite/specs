```http
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/relationship/{key} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.2
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "onDelete": "cascade",
  "newKey": ""
}
```
