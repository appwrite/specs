```http
POST /v1/sites/{siteId}/deployments/template HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "repository": "<REPOSITORY>",
  "owner": "<OWNER>",
  "rootDirectory": "<ROOT_DIRECTORY>",
  "type": "branch",
  "reference": "<REFERENCE>",
  "activate": false
}

{
  "repository": "<REPOSITORY>",
  "owner": "<OWNER>",
  "rootDirectory": "<ROOT_DIRECTORY>",
  "type": "branch",
  "reference": "<REFERENCE>",
  "activate": false
}
```
