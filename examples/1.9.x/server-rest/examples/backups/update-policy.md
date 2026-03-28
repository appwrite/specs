```http
PATCH /v1/backups/policies/{policyId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "name": "<NAME>",
  "retention": 1,
  "schedule": "",
  "enabled": false
}
```
