```http
POST /v1/users/{userId}/targets HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "targetId": "<TARGET_ID>",
  "providerType": "email",
  "identifier": "<IDENTIFIER>",
  "providerId": "<PROVIDER_ID>",
  "name": "<NAME>"
}
```
