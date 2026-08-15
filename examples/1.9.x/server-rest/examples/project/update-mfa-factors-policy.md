```http
PATCH /v1/project/policies/mfa-factors HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "totp": false,
  "email": false,
  "phone": false,
  "custom": false
}

{
  "totp": false,
  "email": false,
  "phone": false,
  "custom": false
}
```
