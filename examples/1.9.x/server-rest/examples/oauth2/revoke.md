```http
POST /v1/oauth2/{project_id}/revoke HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5

{
  "token": "<TOKEN>",
  "token_type_hint": "access_token",
  "client_id": "<CLIENT_ID>",
  "client_secret": "<CLIENT_SECRET>"
}

{
  "token": "<TOKEN>",
  "token_type_hint": "access_token",
  "client_id": "<CLIENT_ID>",
  "client_secret": "<CLIENT_SECRET>"
}
```
