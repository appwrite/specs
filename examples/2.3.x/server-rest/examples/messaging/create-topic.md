```http
POST /v1/messaging/topics HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.3.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "topicId": "<TOPIC_ID>",
  "name": "<NAME>",
  "subscribe": ["any"],
  "qos": 0,
  "expiry": 0
}
```
