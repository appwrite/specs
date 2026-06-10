```http
PUT /v1/webhooks/{webhookId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "url": "",
  "events": [],
  "enabled": false,
  "tls": false,
  "authUsername": "<AUTH_USERNAME>",
  "authPassword": "password"
}

{
  "name": "<NAME>",
  "url": "",
  "events": [],
  "enabled": false,
  "tls": false,
  "authUsername": "<AUTH_USERNAME>",
  "authPassword": "password"
}
```
