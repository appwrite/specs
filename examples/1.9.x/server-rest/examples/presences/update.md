```http
PATCH /v1/presences/{presenceId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "userId": "<USER_ID>",
  "status": "<STATUS>",
  "expiresAt": "2020-10-15T06:38:00.000+00:00",
  "metadata": {},
  "permissions": ["read(\"any\")"],
  "purge": false
}
```
