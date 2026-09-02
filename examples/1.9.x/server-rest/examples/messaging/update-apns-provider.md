```http
PATCH /v1/messaging/providers/apns/{providerId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "enabled": false,
  "authKey": "<AUTH_KEY>",
  "authKeyId": "<AUTH_KEY_ID>",
  "teamId": "<TEAM_ID>",
  "bundleId": "<BUNDLE_ID>",
  "sandbox": false
}
```
