```http
POST /v1/account/targets/push HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.1
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "targetId": "<TARGET_ID>",
  "identifier": "<IDENTIFIER>",
  "providerId": "<PROVIDER_ID>",
  "bundleId": "<BUNDLE_ID>",
  "environment": "sandbox"
}
```
