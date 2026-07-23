```http
POST /v1/oauth2/{project_id}/authorize HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5

{
  "client_id": "<CLIENT_ID>",
  "redirect_uri": "https://example.com",
  "response_type": "",
  "scope": "<SCOPE>",
  "state": "<STATE>",
  "nonce": "<NONCE>",
  "code_challenge": "<CODE_CHALLENGE>",
  "code_challenge_method": "s256",
  "prompt": "<PROMPT>",
  "max_age": 0,
  "authorization_details": "<AUTHORIZATION_DETAILS>",
  "resource": "",
  "audience": "<AUDIENCE>",
  "request_uri": "<REQUEST_URI>"
}

{
  "client_id": "<CLIENT_ID>",
  "redirect_uri": "https://example.com",
  "response_type": "",
  "scope": "<SCOPE>",
  "state": "<STATE>",
  "nonce": "<NONCE>",
  "code_challenge": "<CODE_CHALLENGE>",
  "code_challenge_method": "s256",
  "prompt": "<PROMPT>",
  "max_age": 0,
  "authorization_details": "<AUTHORIZATION_DETAILS>",
  "resource": "",
  "audience": "<AUDIENCE>",
  "request_uri": "<REQUEST_URI>"
}
```
