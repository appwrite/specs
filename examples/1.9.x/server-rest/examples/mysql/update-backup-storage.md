```http
PUT /v1/mysql/{databaseId}/backups/storage HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "provider": "s3",
  "bucket": "<BUCKET>",
  "region": "<REGION>",
  "prefix": "<PREFIX>",
  "endpoint": "<ENDPOINT>",
  "accessKey": "<ACCESS_KEY>",
  "secretKey": "<SECRET_KEY>"
}
```
