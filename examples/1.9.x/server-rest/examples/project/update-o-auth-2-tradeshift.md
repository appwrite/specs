```http
PATCH /v1/project/oauth2/tradeshift HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.3
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "oauth2ClientId": "<OAUTH2_CLIENT_ID>",
  "oauth2ClientSecret": "<OAUTH2_CLIENT_SECRET>",
  "enabled": false
}
```
