```http
POST /v1/users/sha HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "password": "password",
  "passwordVersion": "sha1",
  "name": "<NAME>"
}

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "password": "password",
  "passwordVersion": "sha1",
  "name": "<NAME>"
}
```
