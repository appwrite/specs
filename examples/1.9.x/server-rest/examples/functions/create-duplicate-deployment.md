```http
POST /v1/functions/{functionId}/deployments/duplicate HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "deploymentId": "<DEPLOYMENT_ID>",
  "buildId": "<BUILD_ID>"
}

{
  "deploymentId": "<DEPLOYMENT_ID>",
  "buildId": "<BUILD_ID>"
}
```
