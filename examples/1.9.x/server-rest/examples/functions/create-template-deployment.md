```http
POST /v1/functions/{functionId}/deployments/template HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "repository": "<REPOSITORY>",
  "owner": "<OWNER>",
  "rootDirectory": "<ROOT_DIRECTORY>",
  "type": "commit",
  "reference": "<REFERENCE>",
  "activate": false
}
```
