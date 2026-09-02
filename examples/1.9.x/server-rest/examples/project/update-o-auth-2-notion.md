```http
PATCH /v1/project/oauth2/notion HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "oauthClientId": "<OAUTH_CLIENT_ID>",
  "oauthClientSecret": "<OAUTH_CLIENT_SECRET>",
  "enabled": false
}
```
