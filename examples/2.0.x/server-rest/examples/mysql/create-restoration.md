```http
POST /v1/mysql/{databaseId}/restorations HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "type": "backup",
  "backupId": "<BACKUP_ID>",
  "targetDatabaseId": "<TARGET_DATABASE_ID>",
  "targetTime": "2020-10-15T06:38:00.000+00:00"
}
```
