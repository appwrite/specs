```http
PUT /v1/webhooks/{webhookId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "url": "https://example.com/webhook",
  "events": [],
  "enabled": false,
  "tls": false,
  "authUsername": "<AUTH_USERNAME>",
  "authPassword": "password"
}
```
