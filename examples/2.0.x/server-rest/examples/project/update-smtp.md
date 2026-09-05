```http
PATCH /v1/project/smtp HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "host": "example.com",
  "port": 587,
  "username": "<USERNAME>",
  "password": "password",
  "senderEmail": "email@example.com",
  "senderName": "<SENDER_NAME>",
  "replyToEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>",
  "secure": "tls",
  "enabled": false
}
```
