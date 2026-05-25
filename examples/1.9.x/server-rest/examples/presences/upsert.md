```http
PUT /v1/presences/{presenceId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 

{
  "userId": "<USER_ID>",
  "status": "<STATUS>",
  "permissions": ["read(\"any\")"],
  "expiresAt": "2020-10-15T06:38:00.000+00:00",
  "metadata": {}
}
```
