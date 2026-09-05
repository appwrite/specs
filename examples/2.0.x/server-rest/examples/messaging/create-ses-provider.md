```http
POST /v1/messaging/providers/ses HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "providerId": "<PROVIDER_ID>",
  "name": "<NAME>",
  "accessKey": "<ACCESS_KEY>",
  "secretKey": "<SECRET_KEY>",
  "region": "<REGION>",
  "fromName": "<FROM_NAME>",
  "fromEmail": "email@example.com",
  "replyToName": "<REPLY_TO_NAME>",
  "replyToEmail": "email@example.com",
  "enabled": false
}
```
