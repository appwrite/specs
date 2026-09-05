```http
PATCH /v1/messaging/providers/msg91/{providerId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "enabled": false,
  "templateId": "<TEMPLATE_ID>",
  "senderId": "<SENDER_ID>",
  "authKey": "<AUTH_KEY>"
}
```
