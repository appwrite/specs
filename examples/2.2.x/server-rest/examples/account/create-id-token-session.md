```http
POST /v1/account/sessions/id-token HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.2.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "provider": "apple",
  "idToken": "<ID_TOKEN>",
  "nonce": "<NONCE>",
  "accessToken": "<ACCESS_TOKEN>",
  "accessTokenExpiry": 0,
  "name": "<NAME>"
}
```
