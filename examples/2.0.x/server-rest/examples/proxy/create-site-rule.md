```http
POST /v1/proxy/rules/site HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "domain": "example.com",
  "siteId": "<SITE_ID>",
  "branch": "<BRANCH>"
}
```
