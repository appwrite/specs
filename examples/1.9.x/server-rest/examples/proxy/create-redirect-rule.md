```http
POST /v1/proxy/rules/redirect HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "domain": "",
  "url": "https://example.com",
  "statusCode": "301",
  "resourceId": "<RESOURCE_ID>",
  "resourceType": "site"
}

{
  "domain": "",
  "url": "https://example.com",
  "statusCode": "301",
  "resourceId": "<RESOURCE_ID>",
  "resourceType": "site"
}
```
