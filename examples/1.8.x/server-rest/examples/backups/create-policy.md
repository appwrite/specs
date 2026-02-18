```http
POST /v1/backups/policies HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "policyId": "<POLICY_ID>",
  "name": "<NAME>",
  "services": [],
  "resourceId": "<RESOURCE_ID>",
  "enabled": false,
  "retention": 1,
  "schedule": ""
}
```
