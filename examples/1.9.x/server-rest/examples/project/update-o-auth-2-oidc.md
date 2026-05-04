```http
PATCH /v1/project/oauth2/oidc HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.3
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "clientId": "<CLIENT_ID>",
  "clientSecret": "<CLIENT_SECRET>",
  "wellKnownURL": "https://example.com",
  "authorizationURL": "https://example.com",
  "tokenUrl": "https://example.com",
  "userInfoUrl": "https://example.com",
  "enabled": false
}
```
