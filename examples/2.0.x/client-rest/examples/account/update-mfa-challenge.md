```http
PUT /v1/account/mfa/challenges HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "challengeId": "<CHALLENGE_ID>",
  "otp": "<OTP>"
}
```
