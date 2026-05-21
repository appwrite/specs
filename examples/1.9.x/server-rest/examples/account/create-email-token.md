```http
POST /v1/account/tokens/email HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "phrase": false
}
```
