```http
PATCH /v1/project/oauth2/apple HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.3
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "serviceId": "<SERVICE_ID>",
  "keyId": "<KEY_ID>",
  "teamId": "<TEAM_ID>",
  "p8File": "<P8_FILE>",
  "enabled": false
}
```
