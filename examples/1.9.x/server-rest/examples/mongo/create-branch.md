```http
POST /v1/mongo/{databaseId}/branches HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "branchId": "<BRANCH_ID>",
  "ttl": 300
}
```
