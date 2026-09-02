```http
PATCH /v1/messaging/providers/vonage/{providerId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "enabled": false,
  "apiKey": "<API_KEY>",
  "apiSecret": "<API_SECRET>",
  "from": "<FROM>"
}
```
