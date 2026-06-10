```http
POST /v1/account/tokens/magic-url HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "url": "https://example.com",
  "phrase": false
}

{
  "userId": "<USER_ID>",
  "email": "email@example.com",
  "url": "https://example.com",
  "phrase": false
}
```
