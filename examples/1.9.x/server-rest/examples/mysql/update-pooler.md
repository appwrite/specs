```http
PATCH /v1/mysql/{databaseId}/pooler HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "mode": "transaction",
  "maxConnections": 10,
  "defaultPoolSize": 1,
  "readWriteSplitting": false,
  "poolerCpuRequest": "<POOLER_CPU_REQUEST>",
  "poolerCpuLimit": "<POOLER_CPU_LIMIT>",
  "poolerMemoryRequest": "<POOLER_MEMORY_REQUEST>",
  "poolerMemoryLimit": "<POOLER_MEMORY_LIMIT>"
}
```
