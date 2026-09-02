```http
POST /v1/apps HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "appId": "<APP_ID>",
  "name": "<NAME>",
  "description": "<DESCRIPTION>",
  "clientUri": "https://example.com",
  "logoUri": "https://example.com",
  "privacyPolicyUrl": "https://example.com",
  "termsUrl": "https://example.com",
  "contacts": [],
  "tagline": "<TAGLINE>",
  "tags": [],
  "images": [],
  "supportUrl": "https://example.com",
  "dataDeletionUrl": "https://example.com",
  "redirectUris": [],
  "postLogoutRedirectUris": [],
  "enabled": false,
  "type": "public",
  "deviceFlow": false,
  "teamId": "<TEAM_ID>"
}
```
