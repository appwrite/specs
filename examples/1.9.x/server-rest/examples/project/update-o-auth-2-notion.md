```http
PATCH /v1/project/oauth2/notion HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.4
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "oauthClientId": "<OAUTH_CLIENT_ID>",
  "oauthClientSecret": "<OAUTH_CLIENT_SECRET>",
  "enabled": false
}
```
