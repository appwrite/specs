```http
POST /v1/vectorsdb HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "databaseId": "<DATABASE_ID>",
  "name": "<NAME>",
  "enabled": false,
  "specification": "serverless",
  "replicas": 0,
  "syncMode": "async"
}
```
