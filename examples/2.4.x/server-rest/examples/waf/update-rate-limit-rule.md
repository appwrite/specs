```http
PATCH /v1/waf/rules/rate-limit/{ruleId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.4.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "resourceType": "api",
  "resourceId": "<RESOURCE_ID>",
  "name": "<NAME>",
  "description": "<DESCRIPTION>",
  "limit": 1,
  "interval": 1,
  "key": "ip",
  "maxBucketSize": 1,
  "priority": -100000,
  "enabled": false,
  "conditions": []
}
```
