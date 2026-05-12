```http
PATCH /v1/project/oauth2/gitlab HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.4
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "applicationId": "<APPLICATION_ID>",
  "secret": "<SECRET>",
  "endpoint": "https://example.com",
  "enabled": false
}
```
