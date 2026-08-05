```http
PATCH /v1/project/oauth2/oidc HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "clientId": "<CLIENT_ID>",
  "clientSecret": "<CLIENT_SECRET>",
  "wellKnownURL": "https://example.com",
  "authorizationURL": "https://example.com",
  "tokenURL": "https://example.com",
  "userInfoURL": "https://example.com",
  "prompt": [],
  "maxAge": 0,
  "enabled": false
}

{
  "clientId": "<CLIENT_ID>",
  "clientSecret": "<CLIENT_SECRET>",
  "wellKnownURL": "https://example.com",
  "authorizationURL": "https://example.com",
  "tokenURL": "https://example.com",
  "userInfoURL": "https://example.com",
  "prompt": [],
  "maxAge": 0,
  "enabled": false
}
```
