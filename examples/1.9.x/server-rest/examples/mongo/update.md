```http
PATCH /v1/mongo/{databaseId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "status": "ready",
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
  "storageAutoscalingMaxGb": 0,
  "metricsTraceSampleRate": 0,
  "metricsSlowQueryLogThresholdMs": 0,
  "sqlApiEnabled": false,
  "sqlApiAllowedStatements": [],
  "sqlApiMaxRows": 1,
  "sqlApiMaxBytes": 1024,
  "sqlApiTimeoutSeconds": 1
}
```
