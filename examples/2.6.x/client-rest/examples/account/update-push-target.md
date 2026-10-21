```http
PUT /v1/account/targets/{targetId}/push HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.1
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "identifier": "<IDENTIFIER>",
  "bundleId": "<BUNDLE_ID>",
  "environment": "sandbox"
}
```
