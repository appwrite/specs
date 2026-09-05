```http
PATCH /v1/project/policies/membership-privacy HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": false,
  "userEmail": false,
  "userPhone": false,
  "userName": false,
  "userMFA": false,
  "userAccessedAt": false
}
```
