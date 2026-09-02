```http
PATCH /v1/project/oauth2/tradeshift HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "oauth2ClientId": "<OAUTH2_CLIENT_ID>",
  "oauth2ClientSecret": "<OAUTH2_CLIENT_SECRET>",
  "enabled": false
}
```
