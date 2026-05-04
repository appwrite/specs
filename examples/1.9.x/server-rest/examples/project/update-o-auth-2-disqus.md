```http
PATCH /v1/project/oauth2/disqus HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.3
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "publicKey": "<PUBLIC_KEY>",
  "secretKey": "<SECRET_KEY>",
  "enabled": false
}
```
