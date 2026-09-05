```http
POST /v1/users/scrypt HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "password": "password",
  "passwordSalt": "<PASSWORD_SALT>",
  "passwordCpu": 8,
  "passwordMemory": 65536,
  "passwordParallel": 1,
  "passwordLength": 64,
  "name": "<NAME>"
}
```
