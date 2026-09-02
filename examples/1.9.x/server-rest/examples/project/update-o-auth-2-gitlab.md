```http
PATCH /v1/project/oauth2/gitlab HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "applicationId": "<APPLICATION_ID>",
  "secret": "<SECRET>",
  "endpoint": "https://example.com",
  "enabled": false
}
```
