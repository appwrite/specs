```http
POST /v1/documentsdb HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "databaseId": "<DATABASE_ID>",
  "name": "<NAME>",
  "enabled": false,
  "description": "<DESCRIPTION>",
  "specification": "serverless",
  "replicas": 0,
  "syncMode": "async"
}
```
