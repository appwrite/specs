```http
POST /v1/oauth2/{project_id}/revoke HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0

{
  "token": "<TOKEN>",
  "token_type_hint": "access_token",
  "client_id": "<CLIENT_ID>",
  "client_secret": "<CLIENT_SECRET>"
}
```
