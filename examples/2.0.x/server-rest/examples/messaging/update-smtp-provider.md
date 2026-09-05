```http
PATCH /v1/messaging/providers/smtp/{providerId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "host": "<HOST>",
  "port": 1,
  "username": "<USERNAME>",
  "password": "password",
  "encryption": "none",
  "autoTLS": false,
  "mailer": "<MAILER>",
  "fromName": "<FROM_NAME>",
  "fromEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>",
  "replyToEmail": "<REPLY_TO_EMAIL>",
  "enabled": false
}
```
