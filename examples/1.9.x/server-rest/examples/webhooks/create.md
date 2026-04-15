```http
POST /v1/webhooks HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.1
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "webhookId": "<WEBHOOK_ID>",
  "url": "",
  "name": "<NAME>",
  "events": [],
  "enabled": false,
  "tls": false,
  "authUsername": "<AUTH_USERNAME>",
  "authPassword": "<AUTH_PASSWORD>",
  "secret": "<SECRET>"
}
```
