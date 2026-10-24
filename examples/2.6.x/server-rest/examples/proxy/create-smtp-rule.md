```http
POST /v1/proxy/rules/smtp HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "domain": "example.com",
  "functionId": "<FUNCTION_ID>",
  "branch": "<BRANCH>"
}
```
