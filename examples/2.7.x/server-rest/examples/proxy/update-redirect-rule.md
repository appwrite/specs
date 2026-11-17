```http
PATCH /v1/proxy/rules/{ruleId}/redirect HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.7.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "url": "https://example.com",
  "statusCode": "301",
  "resourceId": "<RESOURCE_ID>",
  "resourceType": "site"
}
```
