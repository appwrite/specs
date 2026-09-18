```http
POST /v1/messaging/providers/twilio HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.2.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "providerId": "<PROVIDER_ID>",
  "name": "<NAME>",
  "from": "<FROM>",
  "accountSid": "<ACCOUNT_SID>",
  "authToken": "<AUTH_TOKEN>",
  "enabled": false
}
```
