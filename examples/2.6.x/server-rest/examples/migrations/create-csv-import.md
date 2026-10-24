```http
POST /v1/migrations/csv/imports HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "bucketId": "<BUCKET_ID>",
  "fileId": "<FILE_ID>",
  "databaseId": "<DATABASE_ID>",
  "collectionId": "<COLLECTION_ID>",
  "internalFile": false,
  "onDuplicate": "fail"
}
```
