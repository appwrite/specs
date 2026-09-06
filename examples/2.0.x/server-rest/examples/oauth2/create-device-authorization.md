```http
POST /v1/oauth2/{project_id}/device_authorization HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0

{
  "client_id": "<CLIENT_ID>",
  "scope": "<SCOPE>",
  "authorization_details": "<AUTHORIZATION_DETAILS>",
  "resource": "",
  "audience": "<AUDIENCE>"
}
```
