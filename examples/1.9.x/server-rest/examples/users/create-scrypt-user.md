```http
POST /v1/users/scrypt HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "password": "password",
  "passwordSalt": "<PASSWORD_SALT>",
  "passwordCpu": 0,
  "passwordMemory": 0,
  "passwordParallel": 0,
  "passwordLength": 0,
  "name": "<NAME>"
}

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "password": "password",
  "passwordSalt": "<PASSWORD_SALT>",
  "passwordCpu": 0,
  "passwordMemory": 0,
  "passwordParallel": 0,
  "passwordLength": 0,
  "name": "<NAME>"
}
```
