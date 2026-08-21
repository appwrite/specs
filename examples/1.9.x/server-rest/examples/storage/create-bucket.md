```http
POST /v1/storage/buckets HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "bucketId": "<BUCKET_ID>",
  "name": "<NAME>",
  "permissions": ["read(\"any\")"],
  "fileSecurity": false,
  "enabled": false,
  "maximumFileSize": 1,
  "allowedFileExtensions": [],
  "compression": "none",
  "encryption": false,
  "antivirus": false,
  "transformations": false
}
```
