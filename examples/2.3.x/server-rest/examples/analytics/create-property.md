```http
POST /v1/analytics/properties HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.3.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "propertyId": "<PROPERTY_ID>",
  "name": "<NAME>",
  "domain": "<DOMAIN>",
  "timezone": "<TIMEZONE>",
  "enabled": false,
  "public": false,
  "allowedOrigins": []
}
```
