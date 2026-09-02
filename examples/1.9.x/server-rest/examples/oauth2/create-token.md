```http
POST /v1/oauth2/{project_id}/token HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0

{
  "grant_type": "<GRANT_TYPE>",
  "code": "<CODE>",
  "refresh_token": "<REFRESH_TOKEN>",
  "device_code": "<DEVICE_CODE>",
  "client_id": "<CLIENT_ID>",
  "client_secret": "<CLIENT_SECRET>",
  "code_verifier": "<CODE_VERIFIER>",
  "redirect_uri": "https://example.com",
  "resource": "",
  "audience": "<AUDIENCE>"
}
```
