```http
POST /v1/users/{userId}/tokens HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.1
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "length": 4,
  "expire": 60
}
```
