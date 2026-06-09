```http
PATCH /v1/messaging/providers/ses/{providerId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "enabled": false,
  "accessKey": "<ACCESS_KEY>",
  "secretKey": "<SECRET_KEY>",
  "region": "<REGION>",
  "fromName": "<FROM_NAME>",
  "fromEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>",
  "replyToEmail": "<REPLY_TO_EMAIL>"
}

{
  "name": "<NAME>",
  "enabled": false,
  "accessKey": "<ACCESS_KEY>",
  "secretKey": "<SECRET_KEY>",
  "region": "<REGION>",
  "fromName": "<FROM_NAME>",
  "fromEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>",
  "replyToEmail": "<REPLY_TO_EMAIL>"
}
```
