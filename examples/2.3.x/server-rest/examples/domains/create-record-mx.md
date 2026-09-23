```http
POST /v1/domains/{domainId}/records/mx HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.3.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "",
  "value": "<VALUE>",
  "ttl": 1,
  "priority": 0,
  "comment": "<COMMENT>"
}
```
