```http
POST /v1/messaging/messages/email HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "messageId": "<MESSAGE_ID>",
  "subject": "<SUBJECT>",
  "content": "<CONTENT>",
  "topics": [],
  "users": [],
  "targets": [],
  "cc": [],
  "bcc": [],
  "attachments": [],
  "draft": false,
  "html": false,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}

{
  "messageId": "<MESSAGE_ID>",
  "subject": "<SUBJECT>",
  "content": "<CONTENT>",
  "topics": [],
  "users": [],
  "targets": [],
  "cc": [],
  "bcc": [],
  "attachments": [],
  "draft": false,
  "html": false,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```
