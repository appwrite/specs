```http
POST /v1/sites/{siteId}/variables HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "variableId": "<VARIABLE_ID>",
  "key": "<KEY>",
  "value": "<VALUE>",
  "secret": false
}
```
