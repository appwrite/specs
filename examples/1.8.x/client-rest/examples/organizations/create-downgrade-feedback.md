```http
POST /v1/organizations/{organizationId}/feedbacks/downgrade HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 

{
  "reason": "<REASON>",
  "message": "<MESSAGE>",
  "fromPlanId": "<FROM_PLAN_ID>",
  "toPlanId": "<TO_PLAN_ID>"
}
```
