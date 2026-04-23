```http
PATCH /v1/project/templates/email HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.2
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "templateId": "verification",
  "locale": "af",
  "subject": "<SUBJECT>",
  "message": "<MESSAGE>",
  "senderName": "<SENDER_NAME>",
  "senderEmail": "email@example.com",
  "replyToEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>"
}
```
