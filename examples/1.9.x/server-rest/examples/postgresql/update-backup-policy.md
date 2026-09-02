```http
PATCH /v1/postgresql/{databaseId}/backups/policies/{policyId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "schedule": "",
  "retention": 1,
  "enabled": false
}
```
