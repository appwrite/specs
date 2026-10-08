```http
POST /v1/oauth2/{project_id}/logout HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.4.0

{
  "id_token_hint": "<ID_TOKEN_HINT>",
  "logout_hint": "<LOGOUT_HINT>",
  "client_id": "<CLIENT_ID>",
  "post_logout_redirect_uri": "https://example.com",
  "state": "<STATE>",
  "ui_locales": "<UI_LOCALES>"
}
```
