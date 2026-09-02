```http
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/integer HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "key": "<KEY>",
  "required": false,
  "min": 0,
  "max": 100,
  "default": 10,
  "array": false
}
```
