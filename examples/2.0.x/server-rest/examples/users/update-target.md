```http
PATCH /v1/users/{userId}/targets/{targetId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "identifier": "<IDENTIFIER>",
  "providerId": "<PROVIDER_ID>",
  "name": "<NAME>"
}
```
