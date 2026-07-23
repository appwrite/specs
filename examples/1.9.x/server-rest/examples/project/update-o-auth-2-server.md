```http
PUT /v1/project/oauth2-server HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "enabled": false,
  "authorizationUrl": "https://example.com",
  "scopes": [],
  "authorizationDetailsTypes": [],
  "accessTokenDuration": 60,
  "refreshTokenDuration": 60,
  "publicAccessTokenDuration": 60,
  "publicRefreshTokenDuration": 60,
  "installationAccessTokenDuration": 60,
  "confidentialPkce": false,
  "verificationUrl": "https://example.com",
  "userCodeLength": 6,
  "userCodeFormat": "numeric",
  "deviceCodeDuration": 60,
  "defaultScopes": []
}

{
  "enabled": false,
  "authorizationUrl": "https://example.com",
  "scopes": [],
  "authorizationDetailsTypes": [],
  "accessTokenDuration": 60,
  "refreshTokenDuration": 60,
  "publicAccessTokenDuration": 60,
  "publicRefreshTokenDuration": 60,
  "installationAccessTokenDuration": 60,
  "confidentialPkce": false,
  "verificationUrl": "https://example.com",
  "userCodeLength": 6,
  "userCodeFormat": "numeric",
  "deviceCodeDuration": 60,
  "defaultScopes": []
}
```
