```http
POST /v1/analytics/properties/{propertyId}/events HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.3.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "url": "https://example.com",
  "domain": "<DOMAIN>",
  "referrer": "<REFERRER>",
  "screenWidth": 0,
  "sessionHash": "<SESSION_HASH>",
  "scrollDepth": 0,
  "engagementTime": 0,
  "props": [],
  "userId": "<USER_ID>",
  "ip": "<IP>",
  "userAgent": "<USER_AGENT>"
}
```
