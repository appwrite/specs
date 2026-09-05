```http
PATCH /v1/messaging/providers/telesign/{providerId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "enabled": false,
  "customerId": "<CUSTOMER_ID>",
  "apiKey": "<API_KEY>",
  "from": "<FROM>"
}
```
