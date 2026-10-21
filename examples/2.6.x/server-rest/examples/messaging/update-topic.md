```http
PATCH /v1/messaging/topics/{topicId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.1
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "subscribe": ["any"],
  "qos": 0,
  "expiry": 0,
  "description": "<DESCRIPTION>"
}
```
