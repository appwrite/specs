```http
POST /v1/webhooks HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "webhookId": "<WEBHOOK_ID>",
  "url": "",
  "name": "<NAME>",
  "events": [],
  "enabled": false,
  "security": false,
  "httpUser": "<HTTP_USER>",
  "httpPass": "<HTTP_PASS>"
}
```
