```http
PUT /v1/webhooks/{webhookId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.4
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "name": "<NAME>",
  "url": "",
  "events": [],
  "enabled": false,
  "tls": false,
  "authUsername": "<AUTH_USERNAME>",
  "authPassword": "<AUTH_PASSWORD>"
}
```
