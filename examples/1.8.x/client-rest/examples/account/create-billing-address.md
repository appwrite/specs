```http
POST /v1/account/billing-addresses HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 

{
  "country": "<COUNTRY>",
  "city": "<CITY>",
  "streetAddress": "<STREET_ADDRESS>",
  "addressLine2": "<ADDRESS_LINE2>",
  "state": "<STATE>",
  "postalCode": "<POSTAL_CODE>"
}
```
