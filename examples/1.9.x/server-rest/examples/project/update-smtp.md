```http
PATCH /v1/project/smtp HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.2
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "host": "",
  "port": 0,
  "username": "<USERNAME>",
  "password": "<PASSWORD>",
  "senderEmail": "email@example.com",
  "senderName": "<SENDER_NAME>",
  "replyToEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>",
  "secure": "tls",
  "enabled": false
}
```
