```http
PATCH /v1/messaging/messages/sms/{messageId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "topics": [],
  "users": [],
  "targets": [],
  "content": "<CONTENT>",
  "draft": false,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```
