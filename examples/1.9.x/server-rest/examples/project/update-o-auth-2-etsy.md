```http
PATCH /v1/project/oauth2/etsy HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "keyString": "<KEY_STRING>",
  "sharedSecret": "<SHARED_SECRET>",
  "enabled": false
}
```
