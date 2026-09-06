```http
POST /v1/postgresql/{databaseId}/failovers HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "targetReplicaId": "<TARGET_REPLICA_ID>"
}
```
