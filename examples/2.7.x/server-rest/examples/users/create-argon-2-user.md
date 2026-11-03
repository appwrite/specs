```http
POST /v1/users/argon2 HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.7.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "password": "$argon2id$v=19$m=65536,t=4,p=1$NC8xaW1CVXlIZXFSQi9FRg$0bd4pLo1ytyqvCwl5NSijpm5OIe8J6CjZ1vFemKAg+o",
  "name": "<NAME>"
}
```
