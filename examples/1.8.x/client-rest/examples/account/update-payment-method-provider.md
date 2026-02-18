```http
PATCH /v1/account/payment-methods/{paymentMethodId}/provider HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 

{
  "providerMethodId": "<PROVIDER_METHOD_ID>",
  "name": "<NAME>",
  "state": "<STATE>"
}
```
