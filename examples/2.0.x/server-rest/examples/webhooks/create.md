```http
POST /v1/webhooks HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "webhookId": "<WEBHOOK_ID>",
  "url": "https://example.com/webhook",
  "name": "<NAME>",
  "events": [],
  "enabled": false,
  "tls": false,
  "authUsername": "<AUTH_USERNAME>",
  "authPassword": "password",
  "secret": "<SECRET>"
}
```
