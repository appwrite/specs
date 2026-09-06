```http
POST /v1/mysql/{databaseId}/backups/policies HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "policyId": "<POLICY_ID>",
  "name": "<NAME>",
  "schedule": "",
  "retention": 1,
  "type": "full",
  "enabled": false
}
```
