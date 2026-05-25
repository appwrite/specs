```http
PATCH /v1/project/oauth2/stripe HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "clientId": "<CLIENT_ID>",
  "apiSecretKey": "<API_SECRET_KEY>",
  "enabled": false
}
```
