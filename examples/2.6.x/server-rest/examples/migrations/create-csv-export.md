```http
POST /v1/migrations/csv/exports HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "databaseId": "<DATABASE_ID>",
  "collectionId": "<COLLECTION_ID>",
  "filename": "<FILENAME>",
  "columns": [],
  "queries": [],
  "delimiter": "<DELIMITER>",
  "enclosure": "<ENCLOSURE>",
  "escape": "<ESCAPE>",
  "header": false,
  "notify": false
}
```
