```http
POST /v1/functions/{functionId}/executions HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "body": "<BODY>",
  "async": false,
  "path": "<PATH>",
  "method": "GET",
  "headers": {},
  "scheduledAt": "<SCHEDULED_AT>"
}
```
