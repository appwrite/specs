```http
POST /v1/messaging/messages/push HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "messageId": "<MESSAGE_ID>",
  "title": "<TITLE>",
  "body": "<BODY>",
  "topics": [],
  "users": [],
  "targets": [],
  "data": {},
  "action": "<ACTION>",
  "image": "<ID1:ID2>",
  "icon": "<ICON>",
  "sound": "<SOUND>",
  "color": "<COLOR>",
  "tag": "<TAG>",
  "badge": 1,
  "draft": false,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "contentAvailable": false,
  "critical": false,
  "priority": "normal"
}
```
