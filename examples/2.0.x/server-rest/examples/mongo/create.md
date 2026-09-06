```http
POST /v1/mongo HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "databaseId": "<DATABASE_ID>",
  "name": "<NAME>",
  "version": "17",
  "specification": "<SPECIFICATION>",
  "replicas": 0,
  "syncMode": "async",
  "networkIdleTimeoutSeconds": 60,
  "networkIPAllowlist": [],
  "idleTimeoutMinutes": 5,
  "pitr": false,
  "pitrRetentionDays": 1,
  "storageAutoscaling": false,
  "storageAutoscalingThresholdPercent": 50,
  "storageAutoscalingMaxGb": 0
}
```
