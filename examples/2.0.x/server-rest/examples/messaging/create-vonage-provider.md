```http
POST /v1/messaging/providers/vonage HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "providerId": "<PROVIDER_ID>",
  "name": "<NAME>",
  "from": "+12065550100",
  "apiKey": "<API_KEY>",
  "apiSecret": "<API_SECRET>",
  "enabled": false
}
```
