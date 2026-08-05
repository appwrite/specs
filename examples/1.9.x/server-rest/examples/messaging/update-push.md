```http
PATCH /v1/messaging/messages/push/{messageId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "topics": [],
  "users": [],
  "targets": [],
  "title": "<TITLE>",
  "body": "<BODY>",
  "data": {},
  "action": "<ACTION>",
  "image": "<ID1:ID2>",
  "icon": "<ICON>",
  "sound": "<SOUND>",
  "color": "<COLOR>",
  "tag": "<TAG>",
  "badge": 0,
  "draft": false,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "contentAvailable": false,
  "critical": false,
  "priority": "normal"
}

{
  "topics": [],
  "users": [],
  "targets": [],
  "title": "<TITLE>",
  "body": "<BODY>",
  "data": {},
  "action": "<ACTION>",
  "image": "<ID1:ID2>",
  "icon": "<ICON>",
  "sound": "<SOUND>",
  "color": "<COLOR>",
  "tag": "<TAG>",
  "badge": 0,
  "draft": false,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "contentAvailable": false,
  "critical": false,
  "priority": "normal"
}
```
