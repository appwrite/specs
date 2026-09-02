```http
PUT /v1/apps/{appId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
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
  "enabled": false,
  "redirectUris": [],
  "postLogoutRedirectUris": [],
  "type": "public",
  "deviceFlow": false,
  "installationScopes": [],
  "installationRedirectUrl": "https://example.com"
}
```
