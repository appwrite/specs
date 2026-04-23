```http
POST /v1/backups/restoration HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.9.2
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "archiveId": "<ARCHIVE_ID>",
  "services": [],
  "newResourceId": "<NEW_RESOURCE_ID>",
  "newResourceName": "<NEW_RESOURCE_NAME>"
}
```
