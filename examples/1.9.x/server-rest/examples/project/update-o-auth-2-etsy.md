```http
PATCH /v1/project/oauth2/etsy HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "keyString": "<KEY_STRING>",
  "sharedSecret": "<SHARED_SECRET>",
  "enabled": false
}
```
