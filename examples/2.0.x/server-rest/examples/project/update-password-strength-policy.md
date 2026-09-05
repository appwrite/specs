```http
PATCH /v1/project/policies/password-strength HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "min": 8,
  "uppercase": false,
  "lowercase": false,
  "number": false,
  "symbols": false
}
```
