```http
POST /v1/messaging/providers/msg91 HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "providerId": "<PROVIDER_ID>",
  "name": "<NAME>",
  "templateId": "<TEMPLATE_ID>",
  "senderId": "<SENDER_ID>",
  "authKey": "<AUTH_KEY>",
  "enabled": false
}
```
