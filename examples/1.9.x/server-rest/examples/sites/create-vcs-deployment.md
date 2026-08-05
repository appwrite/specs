```http
POST /v1/sites/{siteId}/deployments/vcs HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "type": "branch",
  "reference": "<REFERENCE>",
  "activate": false
}

{
  "type": "branch",
  "reference": "<REFERENCE>",
  "activate": false
}
```
